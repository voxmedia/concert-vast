import VastElementBase from './vast_element_base';

export default class Clickthrough extends VastElementBase {
  setup() {
    this.clickthrough = null;
  }

  static selector() {
    return 'Creative VideoClicks ClickThrough';
  }

  onVastReady() {
    this.clickthrough = this.elements.map(el => {
      return el.childNodes[0].nodeValue;
    })[0];
  }

  clickthroughUrl() {
    return this.clickthrough;
  }

  openClickthroughUrl() {
    const win = window.open(this.clickthroughUrl(), '_blank');
    win.focus();
  }
}
