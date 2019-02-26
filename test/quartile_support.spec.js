import QuartileSupport from '../src/lib/quartile_support';

describe('Basic Quartile Functionality', () => {
  it('it has a setDuration function', () => {
    const qs = new QuartileSupport();
    expect(typeof qs.setDuration).toBe('function');
    qs.setDuration(10);
  });

  it('it has a callback onQuartileChange function', () => {
    const qs = new QuartileSupport();
    expect(typeof qs.onQuartileChange).toBe('function');
  });

  it('it has a setCurrentTime function', () => {
    const qs = new QuartileSupport();
    expect(typeof qs.setCurrentTime).toBe('function');
  });
});

describe('Callbacks for changes', () => {
  let qs;
  beforeEach(() => {
    qs = new QuartileSupport();
  });

  it('should not set start  on 0s', () => {
    let lastQName = null;
    qs.onQuartileChange(quartileName => {
      lastQName = quartileName;
    });
    qs.setDuration(10);
    qs.setCurrentTime(0);
    expect(lastQName).toEqual(null);
  });

  it('should set start on 0.01s', () => {
    let lastQName = null;
    qs.onQuartileChange(quartileName => {
      lastQName = quartileName;
    });
    qs.setDuration(100);
    qs.setCurrentTime(0.01);
    expect(lastQName).toEqual('start');
  });

  it('should call a callback after 26 percent complete', () => {
    let lastQName = null;
    qs.onQuartileChange(quartileName => {
      lastQName = quartileName;
    });

    qs.setDuration(10);
    qs.setCurrentTime(4);
    expect(lastQName).toBe('firstQuartile');
  });

  it('should call all quartiles if moved forward', () => {
    let lastQName = null;
    let calls = 0;
    qs.onQuartileChange(quartileName => {
      calls++;
      lastQName = quartileName;
    });

    qs.setDuration(10);
    qs.setCurrentTime(10);
    expect(lastQName).toBe('complete');
    expect(calls).toBe(5);
  });

  it('should handle callbacks if duration changes', () => {
    let lastQName = null;
    qs.onQuartileChange(quartileName => {
      lastQName = quartileName;
    });

    qs.setDuration(100);
    qs.setCurrentTime(4);
    expect(lastQName).toBe('start');

    qs.setDuration(4);
    expect(lastQName).toBe('complete');
  });
});
