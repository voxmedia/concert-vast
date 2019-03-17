import MediaFiles from './vast_elements/media_files';
import Clickthrough from './vast_elements/clickthrough';
import Impression from './vast_elements/impression';
import ErrorImpression from './vast_elements/error_impression';
import TrackingEvents from './vast_elements/tracking_events';
import WrapperUrl from './vast_elements/wrapper_url';
import StreamChooser from './stream_chooser';

import Remote, { VastNetworkError } from './remote';

import VideoElementApplication from './applications/video_element';
import VideoJsApplication from './applications/video_js';

export class VastXMLParsingError extends Error {}

export default class Vast {
  constructor({ xml, numberWrapperFollowsAllowed } = { numberWrapperFollowsAllowed: 5 }) {
    this.vastXml = null;
    this.vastUrl = null;
    this.vastDocument = null;
    this.bandwidthEstimateInKbs = 0;
    this.wrapperFollowsRemaining = numberWrapperFollowsAllowed;

    this.loadedElements = {
      MediaFiles: new MediaFiles(this),
      Clickthrough: new Clickthrough(this),
      Impression: new Impression(this),
      ErrorImpression: new ErrorImpression(this),
      TrackingEvents: new TrackingEvents(this),
      WrapperUrl: new WrapperUrl(this),
    };

    if (xml) {
      this.useXmlString(xml);
    }
  }

  async useXmlString(xml) {
    this.vastXml = xml;
    this.vastDocument = null;
    await this.parse();
  }

  bandwidth() {
    return this.bandwidthEstimateInKbs;
  }

  videos() {
    return this.loadedElements['MediaFiles'].videos();
  }

  clickthroughUrl() {
    return this.loadedElements['Clickthrough'].clickthroughUrl();
  }

  openClickthroughUrl() {
    return this.loadedElements['Clickthrough'].openClickthroughUrl();
  }

  wrapperUrl() {
    return this.loadedElements['WrapperUrl'].wrapperUrl();
  }

  url() {
    return this.vastUrl;
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

  trackingEventNamesWithOffsets() {
    return this.loadedElements['TrackingEvents'].trackingEventNamesWithOffsets();
  }

  trackingEventNamesWithOffsetPercent() {
    return this.loadedElements['TrackingEvents'].trackingEventNamesWithOffsetPercent();
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

  async parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser();
      this.vastDocument = parser.parseFromString(this.vastXml, 'application/xml');
      if (this.vastDocument.documentElement.nodeName == 'parsererror') {
        throw new VastXMLParsingError(`Error parsing ${this.vastXml}. Not valid XML`);
      } else {
        await this.processElements();
      }
    }
  }

  async loadRemoteVast(url, { timeout } = { timeout: 10000 }) {
    this.vastUrl = url;
    const remoteVastXml = await Remote.loadUrl({
      url: url,
      timeout: timeout,
      onBandwidthUpdate: bw => {
        this.bandwidthEstimateInKbs = bw;
      },
    });

    await this.useXmlString(remoteVastXml);
  }

  async processElements() {
    Object.values(this.loadedElements).forEach(e => e.process());

    if (this.wrapperUrl()) {
      if (this.wrapperFollowsRemaining-- > 0) {
        await this.loadRemoteVast(this.wrapperUrl());
      } else {
        this.addErrorImpressionUrls();
        throw new VastNetworkError('Network Error: Too Many Vast Wrapper Follows');
      }
    }
  }
}
