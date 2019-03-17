import QuartileSupport from '../quartile_support';

const EVENT_MAPPING = {
  muted: 'mute',
  pause: 'pause',
};

const VIDEO_CONTROLS_HEIGHT = 50;
const VAST_LOADED_CLASS = 'vast-running';
const VAST_PLAYING_CLASS = 'vast-playing';

export default class VideoJs {
  constructor({ vast, videoJsPlayer }) {
    this.vast = vast;
    this.videoJsPlayer = videoJsPlayer;
    this.previousVolume = this.videoJsPlayer.volume();
    this.previousSources = [];
    this._vastPresented = null;
    this.quartileSupport = new QuartileSupport();
    this.restoreVideoPlayer = false;
  }

  applyAsPreroll() {
    this._vastPresented = true;
    this.restoreVideoPlayer = true;

    this.addClassToVideo();
    this.pauseExistingVideoSources();
    this.setupQuartileSupport();
    this.setupVideoEventListeners();
    this.setupImpressions();
    this.loadVastVideo();
    this.autoPlayVideo();
  }

  applyAsPrimary() {
    this.applyAsPreroll();
    this.restoreVideoPlayer = false;
  }

  // private

  pauseExistingVideoSources() {
    this.previousSources = this.videoJsPlayer.src();
  }

  setupVideoEventListeners() {
    this.videoJsPlayer.on('volumechange', this.muteObserver.bind(this));

    for (const nativeEventName in EVENT_MAPPING) {
      this.videoJsPlayer.on(nativeEventName, () => {
        if (!this.vastPresented()) return;
        this.vast.addImpressionTrackingImagesFor(EVENT_MAPPING[nativeEventName]);
      });
    }

    this.videoJsPlayer.on('timeupdate', () => {
      if (!this.vastPresented()) return;
      this.quartileSupport.setCurrentTime(this.videoJsPlayer.currentTime());
    });

    this.videoJsPlayer.on('play', () => {
      if (!this.vastPresented()) return;
      this.videoJsPlayer.addClass(VAST_PLAYING_CLASS);
    });

    this.videoJsPlayer.on('ended', this.vastVideoEndedObserver.bind(this));

    this.videoJsPlayer.off('click');
    this.videoJsPlayer.on('click', this.clickObserver.bind(this));
    this.videoJsPlayer.on('loadedmetadata', this.updateQuartileDuration.bind(this));
    this.videoJsPlayer.on('durationchange', this.updateQuartileDuration.bind(this));
    this.videoJsPlayer.on('enterFullWindow', this.fullscreenObserver.bind(this));
    document.addEventListener('fullscreenchange', this.fullscreenObserver.bind(this));
    document.addEventListener('webkitfullscreenchange', this.fullscreenObserver.bind(this));
  }

  loadVastVideo() {
    const bestVideo = this.vast.bestVideo({
      height: this.videoJsPlayer.height(),
      width: this.videoJsPlayer.width(),
    });

    this.videoJsPlayer.src({
      type: bestVideo.mimeType(),
      src: bestVideo.url(),
    });
  }

  updateQuartileDuration() {
    this.quartileSupport.setDuration(this.videoJsPlayer.duration());
  }

  addClassToVideo() {
    this.videoJsPlayer.addClass(VAST_LOADED_CLASS);
  }

  setupImpressions() {
    this.vast.addImpressionUrls();
  }

  vastVideoEndedObserver() {
    if (!this.vastPresented()) return;
    this.videoJsPlayer.removeClass(VAST_PLAYING_CLASS);

    if (!this.restoreVideoPlayer) return;
    this.videoJsPlayer.removeClass(VAST_LOADED_CLASS);

    this._vastPresented = false;
    console.log('reloading previous sources', this.previousSources);
    this.videoJsPlayer.src(this.previousSources);
  }

  muteObserver() {
    if (!this.vastPresented()) return;

    if (this.previousVolume <= 0 && this.videoJsPlayer.volume() != 0) {
      this.vast.addImpressionTrackingImagesFor('unmute');
    } else if ((this.previousVolume > 0 && this.videoJsPlayer.volume() == 0) || this.videoJsPlayer.muted) {
      this.vast.addImpressionTrackingImagesFor('mute');
    }
    this.previousVolume = this.videoJsPlayer.muted() ? -1 : this.videoJsPlayer.volume();
  }

  autoPlayVideo() {
    this.videoJsPlayer.ready(() => {
      this.videoJsPlayer
        .play()
        .then(() => {})
        .catch(e => {
          if (!this.videoJsPlayer.muted()) {
            this.videoJsPlayer.muted(true);
            this.autoPlayVideo();
          }
        });
    });
  }

  clickObserver(clickEvent) {
    if (!this.vastPresented()) return;

    if (clickEvent.target) {
      const height = clickEvent.target.clientHeight;

      if (clickEvent.offsetY <= height - VIDEO_CONTROLS_HEIGHT && this.isBeyondFirstFrame()) {
        this.vast.openClickthroughUrl();
      }
    }
  }

  fullscreenObserver(fullscreenEvent = null) {
    if (!this.vastPresented()) return;

    this.vast.addImpressionTrackingImagesFor('fullscreen');
  }

  setupQuartileSupport() {
    const events = this.vast.trackingEventNamesWithOffsetPercent();
    for (const name in events) {
      this.quartileSupport.addEvent({
        name: name,
        offset: events[name],
      });
    }
    this.quartileSupport.onQuartileChange(quartile => {
      if (!this.vastPresented()) return;
      this.vast.addImpressionTrackingImagesFor(quartile);
    });
  }

  isBeyondFirstFrame() {
    return this.videoJsPlayer.currentTime() > 0;
  }

  vastPresented() {
    return this._vastPresented;
  }
}
