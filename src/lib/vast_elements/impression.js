import VastElementBase from './vast_element_base'

export default class Impression extends VastElementBase {
  setup() {
    this._impressionUrls = []
  }

  static selector() {
    return 'Ad Impression'
  }

  processed(){
    this._impressionUrls = this.elements.map(el => {
      return el.childNodes[0].nodeValue
    })
  }


  impressionUrls() {
    return this._impressionUrls
  }
}
