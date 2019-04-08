import Vast from '../../src/lib/vast';

describe('Basic adapters spec', () => {
  let vast;

  beforeEach(() => {
    vast = new Vast();
  });

  it('should load the adapters', () => {
    expect(vast.adapterProxy).toBeDefined();
  });
});

describe('Vast events', () => {
  let vast;

  beforeEach(() => {
    vast = new Vast();
  });

  it('vast should support emitting events', () => {
    expect(vast.emit).toBeDefined();
    expect(typeof vast.emit).toBe('function');
  });

  it('should throw an error for a unknown event', () => {
    expect(() => {
      vast.emit('nope nope nope');
    }).toThrowError(/Unknown event/i);
  });
});
