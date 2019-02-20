import QuartileSupport from '../qaurtile_support'

const EVENT_MAPPING = {
  muted: 'mute',
  ended: 'complete',
  pause: 'pause',
}

export default class VideoElement {
  constructor() {
    this.videoElement = null
    this.vast = null
  }

  applyAsPreroll({ vast, videoElement }) {
    this.vast = vast
    this.videoElement = videoElement
    this.quartilesExperienced = []

    this.pauseExistingVideoSources()
    this.setupVideoListeners()
    this.loadVastVideo()
    this.setupImpressions()
    this.setupClickHandlers()
  }

  // private

  pauseExistingVideoSources() {
    Array.from(this.videoElement.querySelectorAll('source')).forEach(n => {
      n.setAttribute('vast-delayed-src', n.getAttribute('src'))
      n.setAttribute('src', null)
    })
  }

  setupVideoListeners() {
    let previousVolume = this.videoElement.volume

    for (const nativeEventName in EVENT_MAPPING) {
      this.videoElement.addEventListener(nativeEventName, () => {
        this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName])
      })
    }

    // handle mute support
    this.videoEvent.addEventListener('volumechange', () => {
      if (previousVolume == 0 && this.videoElement.volume != 0) {
        this.vast.addImpressionTrackingImagesFor('unmute')
      } else if (previousVolume != 0 && this.videoElement.volume == 0) {
        this.vast.addImpressionTrackingImagesFor('mute')
      }
      previousVolume = this.videoElement.volume
    })

    this.videoEvent.addEventListener('timeupdate', () => {
      this.checkForQuartileEvent(this.videoElement.currentTime)
    })
  }

  loadVastVideo() {
    // load this vast video
    const vidSource = document.createElement('source')
    vidSource.setAttribute('src', bestVideo.url())
    vidSource.setAttribute('type', bestVideo.mimeType())
    this.videoElement.appendChild(vidSource)
    this.videoElement.load()
  }
}
