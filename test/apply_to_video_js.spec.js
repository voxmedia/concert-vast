import Vast from '../src/lib/vast';

describe('Apply to Video Element functionality', () => {
  let vast;
  beforeAll(() => {
    vast = new Vast();
  });

  it('should be able to accept a video js player', () => {
    expect(typeof vast.applyToVideoJs).toBe('function');
  });

  it('should be able to accept a video js player as preroll', () => {
    expect(typeof vast.applyToVideoJsAsPreroll).toBe('function');
  });
});
