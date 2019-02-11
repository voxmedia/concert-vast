import MediaFiles from './vast_elements/media_files'

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
      'MediaFiles': (new MediaFiles(this))
    }

    this.parse()
    Object.values(this.loadedElements).forEach(e => e.process())
  }

  videos() {
    return this.loadedElements['MediaFiles'].videos();
  }

  asHLSUrl() {
    return this.loadedElements['MediaFiles'].asHLSUrl();
  }

  /// private ----
  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser()
      this.vastDocument = parser.parseFromString(this.vastXml, "application/xml")
    }
  }
}
