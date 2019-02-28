import MediaFiles from './vast_elements/media_files';
import Clickthrough from './vast_elements/clickthrough';
import Impression from './vast_elements/impression';
import ErrorImpression from './vast_elements/error_impression';
import TrackingEvents from './vast_elements/tracking_events';
import StreamChooser from './stream_chooser';

import VideoElementApplication from './applications/video_element';
import VideoJsApplication from './applications/video_js';

export class VastXMLParsingError extends Error {}
export class VastNetworkError extends Error {}

export default class Vast {
  constructor({ xml } = {}) {
    this.vastXml = null;
    this.vastUrl = null;
    this.vastDocument = null;
    this.bandwidthEstimateInKbs = 0;

    this.loadedElements = {
      MediaFiles: new MediaFiles(this),
      Clickthrough: new Clickthrough(this),
      Impression: new Impression(this),
      ErrorImpression: new ErrorImpression(this),
      TrackingEvents: new TrackingEvents(this),
    };

    if (xml) {
      this.useXmlString(xml);
    }
  }

  useXmlString(xml) {
    this.vastXml = xml;
    this.vastDocument = null;
    this.parse();
  }

  bandwidth() {
    return this.bandwidthEstimateInKbs;
  }

  videos() {
    return this.loadedElements['MediaFiles'].videos();
  }

  asHLSUrl() {
    return this.loadedElements['MediaFiles'].asHLSUrl();
  }

  clickthroughUrl() {
    return this.loadedElements['Clickthrough'].clickthroughUrl();
  }

  openClickthroughUrl() {
    return this.loadedElements['Clickthrough'].openClickthroughUrl();
  }

  impressionUrls() {
    return this.loadedElements['Impression'].impressionUrls();
  }

  addImpressionUrls(doc = document) {
    return this.loadedElements['Impression'].addImpressionUrls(doc);
  }

  errorImpressionUrls() {
    return this.loadedElements['ErrorImpression'].impressionUrls();
  }

  addErrorImpressionUrls(doc = document) {
    return this.loadedElements['ErrorImpression'].addImpressionUrls(doc);
  }

  trackingUrlsFor(eventName) {
    return this.loadedElements['TrackingEvents'].trackingUrlsFor(eventName);
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    return this.loadedElements['TrackingEvents'].addImpressionTrackingImagesFor(eventName, doc);
  }

  applyToVideoElementAsPreroll(videoElement) {
    const vea = new VideoElementApplication({ vast: this, videoElement: videoElement });
    vea.applyAsPreroll();
  }

  applyToVideoElement(videoElement) {
    const videoElApplication = new VideoElementApplication({ vast: this, videoElement: videoElement });
    videoElApplication.applyAsPrimary();
  }

  applyToVideoJsAsPreroll(videoJsPlayer) {
    const videoJsApplication = new VideoJsApplication({ vast: this, videoJsPlayer: videoJsPlayer });
    videoJsApplication.applyAsPreroll();
  }

  applyToVideoJs(videoJsPlayer) {
    const videoJsApplication = new VideoJsApplication({ vast: this, videoJsPlayer: videoJsPlayer });
    videoJsApplication.applyAsPrimary();
  }

  bestVideo(
    { width, height, bandwidth, mimeTypes } = {
      width: 800,
      height: 600,
      bandwidth: null,
      mimeTypes: null,
    }
  ) {
    const chooser = new StreamChooser();
    chooser.useVideosFromMediaFile(this.videos());
    chooser.setBandwidth(this.bandwidth());

    if (bandwidth) chooser.setBandwidth(bandwidth);
    if (mimeTypes) chooser.setSupportedMimeTypes(mimeTypes);

    chooser.setPlayerDimensions({ width: width, height: height });
    return chooser.bestVideo();
  }

  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser();
      this.vastDocument = parser.parseFromString(this.vastXml, 'application/xml');
      if (this.vastDocument.documentElement.nodeName == 'parsererror') {
        throw new VastXMLParsingError(`Error parsing ${this.vastXml}. Not valid XML`);
      }
      this.processAllElements();
    }
  }

  async loadRemoteVast(url, { timeout } = { timeout: 10000 }) {
    return new Promise((resolve, reject) => {
      this.vastUrl = url;
      const request = new XMLHttpRequest();
      request.timeout = timeout;
      let startTime;

      request.addEventListener('load', e => {
        const downloadTime = new Date().getTime() - startTime;
        const downloadSize = request.responseText.length;
        this.bandwidthEstimateInKbs = (downloadSize * 8) / (downloadTime / 1000) / 1024;

        this.useXmlString(request.response);
        resolve();
      });

      request.addEventListener('error', e => {
        reject(new VastNetworkError(`Network Error: Request status: ${request.status}, ${request.responseText}`));
      });

      request.addEventListener('abort', e => {
        reject(new VastNetworkError('Network Aborted'));
      });

      request.addEventListener('timeout', e => {
        reject(new VastNetworkError(`Network Timeout: Request did not complete in ${timeout}ms`));
      });
      startTime = new Date().getTime();
      request.open('GET', this.vastUrl);
      request.send();
    });
  }

  processAllElements() {
    Object.values(this.loadedElements).forEach(e => e.process());
  }
}
