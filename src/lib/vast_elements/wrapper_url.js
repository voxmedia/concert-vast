import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class WrapperUrl extends VastElementBase {
  setup() {
    this.url = null;
  }

  static selector() {
    return 'Ad Wrapper VASTAdTagURI';
  }

  static appendElementsOnFollow() {
    return false;
  }

  onVastReady() {
    this.url = this.elements.map(el => {
      return NodeValue.fromElement(el);
    })[0];
  }

  wrapperUrl() {
    return this.url;
  }
}
