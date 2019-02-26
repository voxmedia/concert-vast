import Vast from '../../src/lib/vast'
import * as fs from 'fs'

describe('Clickthrough', () => {
  let vast

  beforeAll(() => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml')
    vast = new Vast({ xml: xmlString })
  })

  it('should return a clickthrough url', () => {
    expect(vast.clickthroughUrl).not.toBe(undefined)
    expect(vast.clickthroughUrl()).toMatch(/^https:\/\/adclick/)
  })

  it('should handle clicking through to a URL', () => {
    expect(vast.openClickthroughUrl).not.toBe(undefined)
    expect(typeof vast.openClickthroughUrl).toBe('function')
  })

  it('should open the click through URL in a new tab', () => {
    let requestedUrl, requestTarget
    window.open = (url, target) => {
      requestedUrl = url
      requestTarget = target
      return {
        focus: () => {},
      }
    }
    vast.openClickthroughUrl()
    expect(requestedUrl).toMatch(/^https:\/\/adclick/)
    expect(requestTarget).toBe('_blank')
  })
})
