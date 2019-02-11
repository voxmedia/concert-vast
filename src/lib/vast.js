import MediaFiles from './vast_elements/media_files'
import Clickthrough from './vast_elements/clickthrough'
import Impression from './vast_elements/impression'

export default class Vast {
  constructor({xml, url} = {}) {
    this.vastXml = xml
    this.vastUrl = url
    this.vastDocument = null

    if(this.vastXml == undefined &&
       this.vastUrl == undefined){
      throw TypeError('Vast constructor expects either a xml or an url argument to be passed');
    }

    this.loadedElements = {
      'MediaFiles': (new MediaFiles(this)),
      'Clickthrough': (new Clickthrough(this)),
      'Impression': (new Impression(this))
    }

    this.parse()
    Object.values(this.loadedElements).forEach(e => e.process())
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
    }
  }
}
