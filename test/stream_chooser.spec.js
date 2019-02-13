import Vast from '../src/lib/vast'
import StreamChooser from '../src/lib/stream_chooser'
import * as fs from 'fs'

describe('basic interface for StreamChooser', () => {
  it('can be instantianted', () => {
    const sc = new StreamChooser()
  })

  it('can will consume videos from Vast.videos object', () => {
    const sc = new StreamChooser()
    const vast = new Vast()
    expect(typeof sc.useVideosFromMediaFile).toBe('function')
    sc.useVideosFromMediaFile(vast.videos())
  })

  it('it can accept player dimensions', () => {
    const sc = new StreamChooser()
    sc.setPlayerDimensions({ height: 100, width: 150 })
  })
})

describe('descision logic for StreamChooser', () => {
  let sc
  let vast
  beforeEach(() => {
    vast = new Vast({ xml: fs.readFileSync('./test/fixtures/vast.xml') })
    sc = new StreamChooser()
  })

  it('will return the choosen format', () => {
    expect(typeof sc.bestVideo).toBe('function')
  })

  it('will choose the right format for supported formats', () => {
    sc.setSupportedMimeTypes(['video/mp4'])
    sc.useVideosFromMediaFile(vast.videos())
    sc.setBandwidth(1500)
    sc.setPlayerDimensions({ width: 1200, height: 720 })
    const vid = sc.bestVideo()
    expect(vid).not.toBe(null)
    expect(vid.constructor.name).toBe('MediaFile')
    expect(vid.mimeType()).toBe('video/mp4')
    expect(vid.width()).toBe(1280)
    expect(vid.height()).toBe(720)
  })

  it('will choose the right format for smaller screens', () => {
    sc.setSupportedMimeTypes(['video/mp4'])
    sc.useVideosFromMediaFile(vast.videos())
    sc.setBandwidth(600)
    sc.setPlayerDimensions({ width: 500, height: 300 })
    const vid = sc.bestVideo()
    expect(vid).not.toBe(null)
    expect(vid.constructor.name).toBe('MediaFile')
    expect(vid.mimeType()).toBe('video/mp4')
    expect(vid.width()).toBe(480)
    expect(vid.height()).toBe(270)
    expect(vid.bitrate()).toBe(385)
  })
})
