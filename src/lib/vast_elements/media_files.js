import VastElementBase from './vast_element_base'

class MediaFile {
  constructor(mediaElement) {
    this.element = mediaElement
  }

  bitrate() {
    return parseInt(this.element.getAttribute('bitrate'), 10)
  }

  width() {
    return parseInt(this.element.getAttribute('width'), 10)
  }

  height() {
    return parseInt(this.element.getAttribute('height'), 10)
  }

  mimeType() {
    return this.element.getAttribute('type')
  }

  url() {
    return this.element.childNodes[0].nodeValue
  }

  codec() {
    switch(this.mimeType()){
      case 'video/mp4': return 'm4v'; break
      default: throw TypeError('Unknown mime type ' + this.mimeType())
    }
  }

  isVideoType() {
    return this.mimeType().match(/^video\//)
  }
}

//
class HlsMasterPlaylistFile {
  constructor (videos = []) {
    this.videos = videos
  }

  contents() {
    let contents = []
    contents.push('#EXTM3U')

    contents = [contents, ...this.videos.map(v => {
      return `#EXT-X-STREAM-INF:BANDWIDTH=${v.bitrate()*1024},RESOLUTION=${v.width()}x${v.height()},CODEC=${v.codec()}\n${v.url()}`
    })]

    return contents.join('\n')
  }
  // ----


}

export default class MediaFiles extends VastElementBase {
  // Think of this as the constructor
  setup() {
    this.mediaFiles = []
  }

  // Selector to consume elements
  static selector() {
    return 'Creative MediaFiles MediaFile';
  }

  // Elements available
  onVastReady(){
    this.mediaFiles = this.elements.map(el => {
      return new MediaFile(el)
    })
  }

  // Private stuff ---

  videos() {
    return this.mediaFiles.filter(v => {return v.isVideoType()})
  }

  asHLSUrl() {
    const hlsMaker = new HlsMasterPlaylistFile(this.videos())
    return 'data:application/x-mpegURL;base64,' + btoa(hlsMaker.contents())
  }
}
