import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

export default class TrackingEvents extends VastElementBase {
  setup() {
    this.trackingUrls = [];
  }

  static selector() {
    return 'Ad TrackingEvents Tracking';
  }

  onVastReady() {
    this.trackingUrls = this.elements.map(el => {
      return [el.getAttribute('event'), NodeValue.fromElement(el)];
    });
  }

  trackingUrlsFor(eventName) {
    return this.trackingUrls.filter(t => t[0] == eventName).map(t => t[1]);
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    this.trackingUrlsFor(eventName).forEach(url => {
      this.addImpressionUrl(url, { doc: doc, name: eventName });
    });
  }
}
