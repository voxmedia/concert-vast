import VastElementBase from './vast_element_base';
import NodeValue from '../node_value';

class MediaFile {
  constructor(mediaElement) {
    this.element = mediaElement;
  }

  bitrate() {
    return parseInt(this.element.getAttribute('bitrate'), 10);
  }

  width() {
    return parseInt(this.element.getAttribute('width'), 10);
  }

  height() {
    return parseInt(this.element.getAttribute('height'), 10);
  }

  mimeType() {
    return this.element.getAttribute('type');
  }

  url() {
    return NodeValue.fromElement(this.element);
  }

  // J9 HLS
  // isVideoType() {
  //   return this.mimeType().match(/^video\//);
  // }

  isVideoType() {
    return !!(this.mimeType().match(/^video\//) || this.mimeType().match(/^video|application\//));
  }
}

export default class MediaFiles extends VastElementBase {
  // Think of this as the constructor
  setup() {
    this.mediaFiles = [];
  }

  // Selector to consume elements
  static selector() {
    return 'Creative MediaFiles MediaFile';
  }

  // Elements available
  onVastReady() {
    this.mediaFiles = this.elements.map(el => {
      return new MediaFile(el);
    });
  }

  // Private stuff ---

  videos() {
    return this.mediaFiles.filter(v => {
      return v.isVideoType();
    });
  }
}
