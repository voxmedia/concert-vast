import VastElementBase from './vast_element_base';

export default class TrackingEvents extends VastElementBase {
  setup() {
    this.trackingUrls = [];
  }

  static selector() {
    return 'Ad TrackingEvents Tracking';
  }

  onVastReady() {
    this.trackingUrls = this.elements.map(el => {
      return [el.getAttribute('event'), el.childNodes[0].nodeValue];
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
