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
    let startTime;
    let endTime;

    request.addEventListener('load', (e) => {
      console.log('load complete')
      endTime = (new Date()).getTime()

      const downloadTime = endTime - startTime;
      const downloadSize = request.responseText.length
      const speed = (downloadSize * 8) / ((downloadTime)/1000) / 1024;

      console.log(`Complete in: ${downloadTime} ms`)
      console.log(`Size ${downloadSize}`)
      console.log(`speed ${speed} kbps`)

      this.vastXml = request.response;
      this.parse()
    });

    // TODO: figure out if we should record bandwidth acceleration?
    // request.addEventListener('progress', (e) => {
    //   console.log('progress ... ', percentComplete)
    // });

    request.addEventListener('error', (e) => {
      console.log('failed', e)
    });

    startTime = (new Date()).getTime()
    request.open('GET', this.vastUrl, false)
    request.send()
  }

  processAllElements() {
    this.loadedElements.forEach(e => {e.process()})
  }
}
