import Vast from '../src/lib/vast'
import StreamChooser from '../src/lib/stream_chooser'
import * as fs from 'fs'

describe('basic interface for StreamChooser', () => {
  it('can be instantianted', () => {
    const sc = new StreamChooser()
  })

  it('can accept a ConcertVast object', () => {
    const sc = new StreamChooser()
    const vast = new Vast()
    sc.useVast(vast)
  })

  it('raises an error if this is not a concert vast thing', () => {
    const sc = new StreamChooser()
    expect(() => {
      sc.useVast(12)
    }).toThrow(TypeError)
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
    vast.bandwidth = () => {
      return 1500
    }
    sc.setSupportedMimeTypes(['video/mp4'])
    sc.useVast(vast)
    sc.setPlayerDimensions({ width: 1200, height: 720 })
    const vid = sc.bestVideo()
    expect(vid).not.toBe(null)
    expect(vid.constructor.name).toBe('MediaFile')
    expect(vid.mimeType()).toBe('video/mp4')
    expect(vid.width()).toBe(1280)
    expect(vid.height()).toBe(720)
  })

  it('will choose the right format for smaller screens', () => {
    vast.bandwidth = () => {
      return 600
    }
    sc.setSupportedMimeTypes(['video/mp4'])
    sc.useVast(vast)
    sc.setPlayerDimensions({ width: 500, height: 300 })
    const vid = sc.bestVideo()
    expect(vid).not.toBe(null)
    expect(vid.constructor.name).toBe('MediaFile')
    expect(vid.mimeType()).toBe('video/mp4')
    expect(vid.width()).toBe(480)
    expect(vid.height()).toBe(270)
  })
})
