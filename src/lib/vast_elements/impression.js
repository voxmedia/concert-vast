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
      this.addImpressionUrl(url, { doc: doc, name: 'impression' })
    })
  }
}
