import VastElementBase from './vast_element_base';
import Timecodes from '../timecodes';
import NodeValue from '../node_value';
import QuartileSupport from '../quartile_support';

class TrackingEvent {
  constructor({ eventName, url }) {
    this.eventName = eventName;
    this._url = url;
  }

  matches(string) {
    return this.eventName == string;
  }

  name() {
    return this.eventName;
  }

  offsetInSeconds(duration) {
    const quarts = QuartileSupport.quartiles();
    return quarts[this.eventName] * duration;
  }

  url() {
    return this._url;
  }
}

class ProgressTrackingEvent {
  constructor({ offset, url }) {
    this.offset = offset;
    this._url = url;
  }

  matches(secondsOrTimeCodeOrPercent) {
    return (
      this.offset == secondsOrTimeCodeOrPercent ||
      this.offset == Timecodes.secondsToTimecode(secondsOrTimeCodeOrPercent) ||
      this.offset == Timecodes.timecodeToTimecode(secondsOrTimeCodeOrPercent)
    );
  }

  name() {
    return this.offset;
  }

  offsetInSeconds(duration) {
    if (this.offset.indexOf('%') != -1) {
      return duration * (Number(this.offset.replace('%', '')) / 100.0);
    } else {
      return Timecodes.timecodeToSeconds(this.offset);
    }
  }

  url() {
    return this._url;
  }
}

export default class TrackingEvents extends VastElementBase {
  setup() {
    this.trackingEvents = [];
    this.duration = undefined;
  }

  static selector() {
    return 'Ad TrackingEvents Tracking, Ad Inline Creative Duration';
  }

  onVastReady() {
    this.duration = Timecodes.timecodeToSeconds(
      NodeValue.fromElement(this.elements.find(el => el.nodeName == 'Duration'))
    );

    this.trackingEvents = this.elements
      .filter(el => el.nodeName != 'Duration')
      .map(el => {
        const trackingEvent = el.hasAttribute('offset') ? ProgressTrackingEvent : TrackingEvent;

        return new trackingEvent({
          eventName: el.getAttribute('event'),
          offset: el.getAttribute('offset'),
          url: NodeValue.fromElement(el),
        });
      });
  }

  trackingUrlsFor(eventName) {
    return this.trackingEvents.filter(t => t.matches(eventName)).map(t => t.url());
  }

  addImpressionTrackingImagesFor(eventName, doc = document) {
    this.trackingUrlsFor(eventName).forEach(url => {
      this.addImpressionUrl(url, { doc: doc, name: eventName });
    });
  }

  trackingEventNamesWithOffsets() {
    return this.trackingEvents.reduce((all, event) => {
      all[event.name()] = event.offsetInSeconds(this.duration);
      return all;
    }, {});
  }
}
