import Vast from '../../src/lib/vast'
import * as fs from 'fs'

describe('External error handling', () => {
  let vast
  beforeEach(() => {
    vast = new Vast({ xml: fs.readFileSync('./test/fixtures/vast.xml') })
  })

  it('should support return the error pixel urls', () => {
    expect(typeof vast.errorUrls).toBe('function')
    expect(vast.errorUrls()[0]).toMatch(/^https:\/\/ade\.googlesyndication/)
    expect(vast.errorUrls().length).toBe(1)
  })

  it('should support adding the error pixel(s) to the page on error', () => {
    expect(typeof vast.addErrorUrls).toBe('function')
    const imgCount = document.querySelectorAll('img').length
    vast.addErrorUrls()
    expect(document.querySelectorAll('img').length).toEqual(imgCount + 1)
  })
})
