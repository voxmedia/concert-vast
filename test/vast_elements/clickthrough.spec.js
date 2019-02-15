import Vast from '../../src/lib/vast'
import * as fs from 'fs'

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
