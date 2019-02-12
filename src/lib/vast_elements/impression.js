import VastElementBase from './vast_element_base'

export default class Impression extends VastElementBase {
  setup() {
    this._impressionUrls = []
  }

  static selector() {
    return 'Ad Impression'
  }

  onVastReady() {
    this._impressionUrls = this.elements.map(el => {
      return el.childNodes[0].nodeValue
    })
  }

  impressionUrls() {
    return this._impressionUrls
  }

  addImpressionUrls(doc = document) {
    this.impressionUrls().forEach(url => {
      const impressionImage = doc.createElement('img')
      impressionImage.style.height = 1
      impressionImage.style.width = 1
      impressionImage.style.top = 0
      impressionImage.style.left = 0
      impressionImage.style.visibility = 'hidden'
      impressionImage.src = url
      doc.body.appendChild(impressionImage)
    })
  }
}
