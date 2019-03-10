import Remote from '../src/lib/remote';
import mock from 'xhr-mock';

describe('Basic Remote Functionality', () => {
  const fakeUrl = 'http://not-real.com/vast.xml';

  beforeEach(() => {
    mock.setup();
    mock.get(fakeUrl, { body: 'nope' });
  });
  afterEach(() => {
    mock.teardown();
  });

  it('should have a single static function', () => {
    expect(Remote.loadUrl).toBeDefined();
    expect(typeof Remote.loadUrl).toBe('function');
  });

  it('should be able to be used without a bandwith function', async () => {
    await Remote.loadUrl({
      url: fakeUrl,
    });
  });

  it('should callback the bandwidth function after load', async () => {
    const bandwidthTest = jest.fn();
    await Remote.loadUrl({
      url: fakeUrl,
      onBandwidthUpdate: bandwidthTest,
    });
    expect(bandwidthTest).toHaveBeenCalled();
  });
});
