import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class Impression extends VastElementBase {
  setup() {
    this._impressionUrls = [];
  }

  static selector() {
    return 'Ad Impression';
  }

  onVastReady() {
    this._impressionUrls = this.elements.map(el => NodeValue.fromElement(el));
  }

  impressionUrls() {
    return this._impressionUrls;
  }

  addImpressionUrls(doc = document) {
    this.impressionUrls().forEach(url => {
      this.addImpressionUrl(url, { doc: doc, name: 'impression' });
    });
  }
}
