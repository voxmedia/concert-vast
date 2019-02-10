import Vast from '../../src/lib/vast'
import * as fs from 'fs'


describe('Media Files extension', () => {
  let xmlString
  let vast;

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml')
    vast = new Vast({ xml: xmlString })
  })

  it('should know about bitrates of video files', () => {
    const video = vast.videos()[0]
    expect(video.bitrate).not.toBe(undefined)
    expect(typeof video.bitrate).toBe('function')
    expect(video.bitrate()).toBe(262)
  })

  it('should know what type of video codec via mimeType', () => {
    const video = vast.videos()[0]
    expect(video.mimeType).not.toBe(undefined)
    expect(typeof video.mimeType).toBe('function')
    expect(video.mimeType()).toBe('video/mp4')
  })

  it('should know about bitrates of video files', () => {
    const video = vast.videos()[0]
    expect(video.bitrate).not.toBe(undefined)
  })

  it('can return a list of video files', () => {
    const videos = vast.videos()
    expect(videos.length).toBe(10)
  })

  it('can get the url of the video', () => {
    const video = vast.videos()[0]
    expect(video.url).not.toBe(undefined)
    expect(typeof video.url).toBe('function')
    expect(video.url()).toBe('https://gcdn.2mdn.net/videoplayback/id/fadde8e0a3b24322/itag/18/source/doubleclick_dmm/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3680618308/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/974EA821C8BCBD176CED7FBDDDF84421BB96D3F7.B210716A5BB26DFD0F70F1D482AA150CB6B9D20/key/ck2/file/file.mp4')
  })

  it('a video file knows its height and width', () => {
    const video = vast.videos()[0]
    expect(video.height()).toBe(360)
    expect(video.width()).toBe(640)
  })
})

describe('MediaFile to HLS Url', () => {
  let xmlString
  let vast;

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml')
    vast = new Vast({ xml: xmlString })
  })

  it('should return a data url', () => {
    expect(vast.asHLSUrl()).toBeDefined()
    expect(vast.asHLSUrl()).toMatch(/^data:application\/x-mpegURL/)
  })

  it('should conform to m3u8 headers', () => {
    const dataUrl = vast.asHLSUrl();
    const contents = atob(dataUrl.split(',')[1])
    expect(contents).toMatch(/^#EXTM3U/)
    const contentArrayAsLines = contents.split("\n")
    expect(contentArrayAsLines[1]).toBe('#EXT-X-STREAM-INF:BANDWIDTH=268288,RESOLUTION=640x360,CODEC=m4v')
    expect(contentArrayAsLines[2]).toBe(vast.videos()[0].url())
  })
});

