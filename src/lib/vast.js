import MediaFiles from './vast_elements/media_files'
import Clickthrough from './vast_elements/clickthrough'
import Impression from './vast_elements/impression'

export default class Vast {
  constructor({xml} = {}) {
    this.vastXml = xml
    this.vastUrl = null
    this.vastDocument = null
    this.bandwidthEstimateInKbs = 0

    this.loadedElements = {
      'MediaFiles': (new MediaFiles(this)),
      'Clickthrough': (new Clickthrough(this)),
      'Impression': (new Impression(this))
    }

    if (this.vastXml) {
      this.parse()
    }
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

  /// private ----

  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser()
      this.vastDocument = parser.parseFromString(this.vastXml, "application/xml")
      this.processAllElements()
    }
  }

  async loadRemoteVast(url) {
    return new Promise((resolve, reject) => {
      this.vastUrl = url
      const request = new XMLHttpRequest()
      let startTime;
      let endTime;

      request.addEventListener('load', (e) => {
        endTime = (new Date()).getTime()

        const downloadTime = endTime - startTime;
        const downloadSize = request.responseText.length
        this.bandwidthEstimateInKbs = (downloadSize * 8) / ((downloadTime)/1000) / 1024;

        this.vastXml = request.response;
        this.parse()
        resolve()
      });

      request.addEventListener('error', (e) => {
        console.log('failed', e)
        // todo should not reject here, but do something else
        reject()
      });

      startTime = (new Date()).getTime()
      request.open('GET', this.vastUrl)
      request.send()
    })
  }

  processAllElements() {
    Object.values(this.loadedElements).forEach(e => e.process())
  }
}
