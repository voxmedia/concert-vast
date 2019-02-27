import Vast from '../src/lib/vast'

describe('Apply to Video Element functionality', () => {
  let vast
  beforeAll(() => {
    vast = new Vast()
  })

  it('should be able to accept a video element', () => {
    expect(typeof vast.applyToVideoElement).toBe('function')
  })

  it('should be able to accept a video element as preroll', () => {
    expect(typeof vast.applyToVideoElementAsPreroll).toBe('function')
  })
})
