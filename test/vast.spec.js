import Vast, { VastXMLParsingError, VastNetworkError } from '../src/lib/vast'
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

describe('Internal Error Handling', () => {
  let vast
  beforeEach(() => {
    vast = new Vast({ xml: fs.readFileSync('./test/fixtures/vast.xml') })
  })

  it('should have an onError callback handler', () => {
    expect(typeof vast.onError).toBe('function')
    vast.onError(() => {})
  })

  it('should pass an XML parse error to the callback', () => {
    let problem = null
    vast.onError(e => {
      problem = e
    })
    vast.useXmlString('not real xml')
    expect(problem.constructor).toBe(VastXMLParsingError)
    expect(problem.message).toMatch(/error parsing/i)
  })

  // it('should pass a network error to callback', async () => {
  //   mockXhr('error')

  //   let err
  //   vast.onError((e) => {
  //     console.log('got e', e)
  //     err = e
  //   })

  //   await vast.loadRemoteVast('http://doodle.com')
  //   // expect(err.constructor).toBe(VastNetworkError)
  // })

  // it('should send a network error, on timeout', async () => {
  //   const responseXml = fs.readFileSync('./test/fixtures/vast.xml')
  //   mockXhr('timeout', '', 10)

  //   let err
  //   vast.onError((e) => {
  //     err = e
  //   })

  //   await vast.loadRemoteVast('http://doodle.com')
  //   expect(err.constructor).toBe(VastNetworkError)
  // })
})

describe('External error handling', () => {
  let vast
  beforeEach(() => {
    vast = new Vast({ xml: fs.readFileSync('./test/fixtures/vast.xml') })
  })

  it('should support adding the error pixel(s) to the page on error', () => {
    expect(typeof vast.addErrorUrls).toBe('function')
  })
})

describe('vast remote xml loading', () => {
  beforeEach(() => {
    const responseXml = fs.readFileSync('./test/fixtures/vast.xml')
    mockXhr('load', responseXml)
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

const mockXhr = (eventToFire = 'load', response = '', eventDelay = 100) => {
  const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    responseText: response,
    response: response,
    addEventListener: jest.fn((eventName, func) => {
      // console.log('adding fake listener for', eventName, 'stimulating', eventToFire)
      if (eventName == eventToFire) {
        setTimeout(() => {
          func({ message: eventToFire })
        }, eventDelay)
      }
    }),
    setRequestHeader: jest.fn(),
  })
  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass)
}

describe('Vast tag is capable of returning the best video', () => {
  let vast
  beforeAll(() => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml')
    vast = new Vast({ xml: xmlString })
  })

  it('supports bestVideo function', () => {
    expect(typeof vast.bestVideo).toBe('function')
    const vid = vast.bestVideo({ mimeTypes: ['video/mp4'] })
    expect(vid.constructor.name).toBe('MediaFile')
  })
})
