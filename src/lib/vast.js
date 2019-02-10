import MediaFiles from './vast_elements/media_files'

const VAST_ELEMENTS = [MediaFiles];

export default class Vast {
  constructor({xml, url} = {}) {
    this.vastXml = xml
    this.vastUrl = url
    this.vastDocument = null

    if(this.vastXml == undefined &&
       this.vastUrl == undefined){
      throw TypeError('Vast constructor expects either a xml or an url argument to be passed');
    }

    this.loadedElements = VAST_ELEMENTS.map(vastElement => {
      return new vastElement(this)
    })

    this.parse()

    this.loadedElements.forEach(e => {e.process()})
  }

  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser()
      this.vastDocument = parser.parseFromString(this.vastXml, "application/xml")
    }
  }
}
