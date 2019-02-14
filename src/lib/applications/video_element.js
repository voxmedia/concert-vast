export default class VideoElement {
  constructor() {
    this.videoElement = null
    this.vast = null
  }

  useVideo(videoElement) {
    this.videoElement = videoElement
  }

  useVast(vast) {
    this.vast = vast
  }

  apply() {
    this.setupVideo()
    this.setupImpressions()
    this.setupClickHandlers()
  }
}
