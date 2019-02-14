import Vast from '../src/lib/vast'
import VideoElement from '../src/lib/applications/video_element'

describe('Apply to Video Element functionality', () => {
  it('should be able to accept a video element', () => {
    expect(typeof VideoElement).toBe('function')
  })

  it('should all just work', () => {
    const vast = new Vast()
    const applier = new VideoElement()
    const ve = document.createElement('video')
    applier.useVideo(ve)
    applier.useVast(vast)
    applier.apply()
  })
})
