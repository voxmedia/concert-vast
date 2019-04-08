export default class AdapterBase {
  constructor(vast) {
    this.vast = vast;
    this.afterInstall();
  }

  afterInstall() {}
  configureAdapter(options = {}) {}

  vastLoaded() {}
  videoApplied() {}
  adPlay() {}
  adEnd() {}
  adComplete() {}
  adSkipped() {}
  adClicked() {}
  volumeChange() {}
  resized() {}
  paused() {}
  resumed() {}
  expanded() {}
  collapsed() {}
}

export const ADAPTER_EVENTS = [
  'vastLoaded',
  'videoApplied',
  'adPlay',
  'adEnd',
  'adComplete',
  'adSkipped',
  'adClicked',
  'volumeChange',
  'resized',
  'paused',
  'resumed',
  'expanded',
  'collapsed',
];
