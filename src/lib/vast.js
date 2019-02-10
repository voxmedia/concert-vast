import MediaFiles from './vast_elements/media_files'

const VAST_ELEMENTS = [MediaFiles];

export default class Vast {
  constructor({xml, url} = {}) {
    this.vastXml = xml
    this.vastUrl = url
    this.vastDocument = null

    if (this.vastXml == undefined &&
       this.vastUrl == undefined) {
      throw TypeError('Vast constructor expects either a xml or an url argument to be passed');
    }

    this.loadedElements = VAST_ELEMENTS.map(vastElement => {
      return new vastElement(this)
    })

    if (this.vastXml) {
      this.parse()
    }

    if(this.vastUrl) {
      this.loadRemoteVast()
    }
  }

  parse() {
    if (!this.vastDocument) {
      const parser = new DOMParser()
      this.vastDocument = parser.parseFromString(this.vastXml, "application/xml")
      this.processAllElements()
    }
  }

  loadRemoteVast() {
    const request = new XMLHttpRequest()

    request.addEventListener("load", (e) => {
      console.log('load complete', e)
      this.vastXml = request.response;
    });

    request.addEventListener("progress", (e) => {
      console.log('progress', e)
      const percentComplete = e.loaded / e.total * 100;
      console.log('progress ... ', percentComplete)
    });

    request.addEventListener("error", (e) => {
      console.log('failed', e)
    });

    request.open("GET", this.vastUrl)
    console.log('loading remote vast from ', this.vastUrl)
    console.log(request)
    request.send('')
  }

  processAllElements() {
    this.loadedElements.forEach(e => {e.process()})
  }
}
