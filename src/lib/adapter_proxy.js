import Adapters from './adapters/';
import { ADAPTER_EVENTS } from './adapters/base';

export class VastEventError extends Error {}
export class VastProxyConfigurationError extends Error {}

export default class AdapterProxy {
  constructor(vast) {
    this.vast = vast;
    this.adapters = [];
    this.installProxies();
  }

  proxy(eventName, ...args) {
    if (ADAPTER_EVENTS.includes(eventName)) {
      this.adapters.forEach(adapter => {
        adapter[eventName].apply(adapter, args);
      });
    } else {
      throw new VastEventError(`Unknown event type: ${eventName}`);
    }
  }

  configure(adapterName, options = {}) {
    const knownAdapters = this.adapters.map(a => a.constructor.name);

    if (!knownAdapters.includes(adapterName)) {
      throw new VastProxyConfigurationError(
        `Unknown adapter: ${adapterName}, registered adapters (${knownAdapters.join(', ')})`
      );
    }

    this.adapters.filter(a => a.constructor.name == adapterName).map(a => a.configure(options));
  }

  installProxies(adapters = Adapters) {
    this.adapters = adapters.map(adapter => new adapter(this.vast));
  }

  installedProxies() {
    return this.adapters;
  }

  // onAdPlay(){this.proxy('onStartAd')}
  // onStopAd(){this.proxy('onStopAd')}
  // onCompleteAd(){}
  // onVolumeChange(){}
  // onResize(){}
  // onPause(){}
  // onResume(){}
  // onExpand(){}
  // onCollapse(){}
  // onSkip(){}
}
