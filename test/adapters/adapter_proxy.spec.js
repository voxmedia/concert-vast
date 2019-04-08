import AdapterProxy from '../../src/lib/adapter_proxy';

describe('basic interface for adapter proxy', () => {
  it('should be constructed with a vast object', () => {
    const adapter = new AdapterProxy({});
    expect(adapter).toBeInstanceOf(AdapterProxy);
  });

  it('should be able to proxy new events', () => {
    const adapter = new AdapterProxy({});
    expect(typeof adapter.proxy).toBe('function');
  });

  it('should throw an error for a unknown event', () => {
    const adapter = new AdapterProxy({});
    expect(() => {
      adapter.proxy('nope nope nope');
    }).toThrowError(/Unknown event/i);
  });

  it('allows adapters to be installed via installedProxies', () => {
    const adapter = new AdapterProxy({});
    expect(adapter.installedProxies()).toBeDefined();
  });

  it('return installed adapters via installedProxies', () => {
    const adapter = new AdapterProxy({});
    expect(adapter.installedProxies()).toBeDefined();
  });
});

describe('Proxy relationship to adapters', () => {
  // I could not understand how to use locally defined classes
  // as mocks with Jest, made my own
  class MockAdapter {
    constructor() {
      this.calls = [];
    }

    adPlay() {
      this.calls.push('adPlay');
    }

    configure(options) {
      this.calls.push('configure');
    }
  }

  let proxy;
  let mockInstance;

  beforeEach(() => {
    proxy = new AdapterProxy({});
    proxy.installProxies([MockAdapter]);
    mockInstance = proxy.installedProxies()[0];
  });

  it('should proxy events to the adapters', () => {
    proxy.proxy('adPlay');
    expect(mockInstance.calls).toContain('adPlay');
  });

  it('should call configure on specified adapter', () => {
    proxy.configure('MockAdapter', {});
    expect(mockInstance.calls).toContain('configure');
  });

  it('should throw an error if trying to configuring an unknown adapter', () => {
    expect(() => {
      proxy.configure('Not Real', {});
    }).toThrowError(/Unknown adapter/);
  });
});
