import Vast from '../src/lib/vast'
import * as fs from 'fs'

const REMOTE_URL =
  'https://ad.doubleclick.net/ddm/pfadx/N884.154386.EATER.COM/B21643693.231589573;sz=0x0;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml'

describe('Basic Vast class functions', () => {
  it('it can be instantiated with an xml string', () => {
    const vast = new Vast({ xml: '' })
  })

  it('handles valid xml and parses it', () => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml')
    const vast = new Vast({ xml: xmlString })
    vast.parse()
  })
})

describe('vast remote xml loading', () => {
  beforeEach(() => {
    const responseXml = fs.readFileSync('./test/fixtures/vast.xml')
    const xhrMockClass = () => ({
      open: jest.fn(),
      send: jest.fn(),
      responseText: responseXml,
      response: responseXml,
      addEventListener: jest.fn((eventName, func) => {
        if (eventName == 'load') {
          setTimeout(func, 100)
        }
      }),
      setRequestHeader: jest.fn(),
    })
    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)
  })

  it('it can be loaded from a remote url', async () => {
    const vast = new Vast()
    await vast.loadRemoteVast(REMOTE_URL)
    const videos = vast.videos()
    expect(videos.length).toBeGreaterThan(2)
  })

  it('provides bandwidth estimates', async () => {
    const vast = new Vast()
    await vast.loadRemoteVast(REMOTE_URL)
    expect(vast.bandwidth()).toBeGreaterThan(1000)
  })

  it('should have zero bandwith estimate before request', () => {
    const vast = new Vast()
    expect(vast.bandwidth()).toBe(0)
  })
})

describe('Vast Videos', () => {
  let xmlString

  beforeEach(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml')
  })

  it('can return a list of video files', () => {
    const vast = new Vast({ xml: xmlString })
    const videos = vast.videos()
    expect(videos.length).toBe(10)
  })
})

describe('Vast Clickthrough', () => {
  let xmlString

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml')
  })

  it('should return a click through', () => {
    const vast = new Vast({ xml: xmlString })
    expect(vast.clickthroughUrl()).toMatch(/^https:/)
    expect(vast.clickthroughUrl()).toBe(
      'https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsu6OYO6ScslHz6Ie0kqub5FCVUAxcJO1oOJ8eLjzG_onZ5wMdGPn-HE7YryuBvxvcekq_rLQrDY-aOhipXfK-hErA&sig=Cg0ArKJSzLIFAUkswSyTEAE&urlfix=1&adurl=https://nfl.demdex.net/event%3Fd_event%3Dclick%26d_adsrc%3D27510%26d_bu%3D901%26d_src%3D27511%26d_site%3D1106053%26d_campaign%3D21643693%26d_rd%3Dhttp://www.nfl.com'
    )
  })
})
