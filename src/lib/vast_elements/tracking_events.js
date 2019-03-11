import VastElementBase from './vast_element_base';
import Timecodes from '../timecodes';
import NodeValue from '../node_value';

class TrackingEvent {
  constructor({ eventName, url }) {
    this._eventName = eventName;
    this._url = url;
  }

  eventName() {
    return this._eventName;
  }

  matches(string) {
    return this.eventName() == string;
  }

  url() {
    return this._url;
  }
}

class ProgressTrackingEvent {
  constructor({ offset, url }) {
    this._offset = offset;
    this._url = url;
  }

  matches(secondsOrTimeCodeOrPercent) {
    return (
      this.offset() == secondsOrTimeCodeOrPercent ||
      this.offset() == Timecodes.secondsToTimecode(secondsOrTimeCodeOrPercent) ||
      this.offset() == Timecodes.timecodeToTimecode(secondsOrTimeCodeOrPercent)
    );
  }

  offset() {
    return this._offset;
  }

  url() {
    return this._url;
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
      const trackingEvent = el.hasAttribute('offset') ? ProgressTrackingEvent : TrackingEvent;

      return new trackingEvent({
        eventName: el.getAttribute('event'),
        offset: el.getAttribute('offset'),
        url: NodeValue.fromElement(el),
      });
    });
  }

  trackingUrlsFor(eventName) {
    // const timeCodeEventName = this.toTimeCode(eventName)
    return this.trackingUrls.filter(t => t.matches(eventName)).map(t => t.url());
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    this.trackingUrlsFor(eventName).forEach(url => {
      this.addImpressionUrl(url, { doc: doc, name: eventName });
    });
  }
}
