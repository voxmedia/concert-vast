import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

class TrackingEvent {
  constructor({ event, offset, url } = { offset: null }) {
    this.event = event;
    this.offset = offset;
    this.url = url;
    console.log('creating new tracking event', this.event());
  }

  event() {
    return this.event;
  }

  offset() {
    return this.offset;
  }

  url() {
    return this.url;
  }
}

export default class TrackingEvents extends VastElementBase {
  setup() {
    this.trackingUrls = [];
  }

  static selector() {
    return 'Ad TrackingEvents Tracking';
  }

  onVastReady() {
    this.trackingUrls = this.elements.map(el => {
      return new TrackingEvent({
        event: el.getAttribute('event'),
        offset: el.getAttribute('offset'),
        url: el.childNodes[0].nodeValue,
      });
    });
  }

  trackingUrlsFor(eventName) {
    return this.trackingUrls.filter(t => t.event() == eventName).map(t => t.url());
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    this.trackingUrlsFor(eventName).forEach(url => {
      this.addImpressionUrl(url, { doc: doc, name: eventName });
    });
  }
}
