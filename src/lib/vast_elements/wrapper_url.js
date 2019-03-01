import VastElementBase from './vast_element_base';

export default class WrapperUrl extends VastElementBase {
  setup() {
    this.url = null;
  }

  static selector() {
    return 'Ad Wrapper VASTAdTagURI';
  }

  onVastReady() {
    this.url = this.elements.map(el => {
      return el.childNodes[0].nodeValue;
    })[0];
  }

  hasWrapperUrl() {
    return !!this.wrapperUrl();
  }

  wrapperUrl() {
    return this.url;
  }
}
