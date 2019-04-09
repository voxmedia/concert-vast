import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class AdParameters extends VastElementBase {
  setup() {
    this.parameters = null;
  }

  static selector() {
    return 'Creative AdParameters';
  }

  onVastReady() {
    this.parameters = this.elements.map(el => NodeValue.fromElement(el))[0];
  }

  adParameters() {
    return this.parameters || '';
  }
}
