import VastElementBase from './vast_element_base'

class Video {
  constructor(mediaElement){
    this.element = mediaElement

    // const importantAttributes = ['bitrate']
    // importantAttributes.forEach(attr => {
    //   this[attr] = () => {
    //     return this.element.getAttribute(attr);
    //   }
    // })
  }

  bitrate() {
    return parseInt(this.element.getAttribute('bitrate'), 10)
  }

  width() {
    return parseInt(this.element.getAttribute('width'), 10)
  }

  height(){
    return parseInt(this.element.getAttribute('height'), 10)
  }
}

export default class MediaFiles extends VastElementBase {
  // Think of this as the constructor
  setup() {
    this.videos = []
  }

  // Selector to consume elements
  static selector() {
    return 'Creative MediaFiles MediaFile';
  }

  // Elements available
  processed(){
    this.videos = this.elements.map(el => {
      return new Video(el)
    })
  }

  // define public methods on Vast base class
  extendVastBaseWithPublicMethods(){
    this.vast.videos = () => {return this.getVideos()}
  }

  // Private stuff ---

  getVideos() {
    return this.videos
  }
}
