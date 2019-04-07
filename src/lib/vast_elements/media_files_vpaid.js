import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class MediaFilesVpaid extends VastElementBase {
  // Think of this as the constructor
  setup() {
    this.vpaidUrls = [];
  }

  // Selector to consume elements
  static selector() {
    return 'Creative MediaFiles MediaFile[apiFramework="VPAID"][type="application/javascript"]';
  }

  // Elements available
  onVastReady() {
    this.vpaidUrls = this.elements.map(el => {
      return NodeValue.fromElement(el);
    });
  }

  // Private stuff ---

  url() {
    return this.vpaidUrls[0];
  }
}
