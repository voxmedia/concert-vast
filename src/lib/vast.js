import MediaFiles from './vast_elements/media_files'
import Clickthrough from './vast_elements/clickthrough'
import Impression from './vast_elements/impression'
import ErrorImpression from './vast_elements/error_impression'
import TrackingEvents from './vast_elements/tracking_events'
import StreamChooser from './stream_chooser'

export class VastXMLParsingError extends Error {}
export class VastNetworkError extends Error {}

export default class Vast {
  constructor({ xml } = {}) {
    this.vastXml = null
    this.vastUrl = null
    this.vastDocument = null
    this.bandwidthEstimateInKbs = 0
    this.errorCallbacks = []

    this.loadedElements = {
      MediaFiles: new MediaFiles(this),
      Clickthrough: new Clickthrough(this),
      Impression: new Impression(this),
      ErrorImpression: new ErrorImpression(this),
      TrackingEvents: new TrackingEvents(this),
    }

    if (xml) {
      this.useXmlString(xml)
    }
  }

  useXmlString(xml) {
    this.vastXml = xml
    this.vastDocument = null
    this.parse()
  }

  onError(callback) {
    this.errorCallbacks.push(callback)
  }

  bandwidth() {
    return this.bandwidthEstimateInKbs
  }

  videos() {
    return this.loadedElements['MediaFiles'].videos()
  }

  asHLSUrl() {
    return this.loadedElements['MediaFiles'].asHLSUrl()
  }

  clickthroughUrl() {
    return this.loadedElements['Clickthrough'].clickthroughUrl()
  }

  impressionUrls() {
    return this.loadedElements['Impression'].impressionUrls()
  }

  addImpressionUrls(doc = document) {
    return this.loadedElements['Impression'].addImpressionUrls(doc)
  }

  errorUrls() {
    return this.loadedElements['ErrorImpression'].impressionUrls()
  }

  addErrorUrls(doc = document) {
    return this.loadedElements['ErrorImpression'].addImpressionUrls(doc)
  }

  trackingUrlsFor(eventName) {
    return this.loadedElements['TrackingEvents'].trackingUrlsFor(eventName)
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    return this.loadedElements['TrackingEvents'].addImpressionTrackingImagesFor(
      eventName,
      doc
    )
  }

  bestVideo(
    { width, height, bandwidth, mimeTypes } = {
      width: 800,
      height: 600,
      bandwidth: null,
      mimeTypes: null,
    }
  ) {
    const chooser = new StreamChooser()
    chooser.useVideosFromMediaFile(this.videos())
    chooser.setBandwidth(this.bandwidth())

    if (bandwidth) chooser.setBandwidth(bandwidth)
    if (mimeTypes) chooser.setSupportedMimeTypes(mimeTypes)

    chooser.setPlayerDimensions({ width: width, height: height })
    return chooser.bestVideo()
  }

  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser()
      this.vastDocument = parser.parseFromString(
        this.vastXml,
        'application/xml'
      )
      if (this.vastDocument.documentElement.nodeName == 'parsererror') {
        this.handleError(
          new VastXMLParsingError(
            `Error parsing ${this.vastXml}. Not valid XML`
          )
        )
      } else {
        this.processAllElements()
      }
    }
  }

  async loadRemoteVast(url) {
    return new Promise((resolve, reject) => {
      this.vastUrl = url
      const request = new XMLHttpRequest()
      request.timeout = 2000
      let startTime
      let endTime

      request.addEventListener('load', e => {
        endTime = new Date().getTime()

        const downloadTime = endTime - startTime
        const downloadSize = request.responseText.length
        this.bandwidthEstimateInKbs =
          (downloadSize * 8) / (downloadTime / 1000) / 1024

        this.useXmlString(request.response)
        resolve()
      })

      request.addEventListener('error', e => {
        const err = new VastNetworkError('Network Error')
        this.handleError(err)
        reject(err)
      })

      request.addEventListener('abort', e => {
        const err = new VastNetworkError('Network Aborted')
        this.handleError(err)
        reject(err)
      })

      request.addEventListener('timeout', e => {
        const err = new VastNetworkError('Network Timeout')
        this.handleError(err)
        reject(err)
      })

      startTime = new Date().getTime()
      request.open('GET', this.vastUrl)
      request.send()
    })
  }

  handleError(error) {
    this.errorCallbacks.forEach(cb => cb.call(this, error))
  }

  processAllElements() {
    Object.values(this.loadedElements).forEach(e => e.process())
  }
}
