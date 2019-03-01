import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class Clickthrough extends VastElementBase {
  setup() {
    this.clickthrough = null;
  }

  static selector() {
    return 'Creative VideoClicks ClickThrough';
  }

  onVastReady() {
    this.clickthrough = this.elements.map(el => NodeValue.fromElement(el))[0];
  }

  clickthroughUrl() {
    return this.clickthrough;
  }

  openClickthroughUrl() {
    const win = window.open(this.clickthroughUrl(), '_blank');
    win.focus();
  }
}
