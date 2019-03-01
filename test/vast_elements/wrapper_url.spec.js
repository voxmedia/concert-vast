import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('AdTagURI extension', () => {
  let xmlString;
  let vast;

  beforeAll(async () => {
    xmlString = fs.readFileSync('./test/fixtures/vast-wrapper.xml');
    vast = new Vast();
    await vast.useXmlString(xmlString);
  });

  it('should find wrapper urls in vast tags', () => {
    expect(typeof vast.wrapperUrl).toBe('function');
  });

  it('should get the wrapper urls in vast tags', () => {
    expect(vast.wrapperUrl()).toBe(
      'https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%203.0%20Samples/Inline_Companion_Tag-test.xml'
    );
  });

  it('should load up an impression url from this first and followed vast tag', () => {
    expect(vast.impressionUrls()).toContain('http://example.com/track/impression');
    expect(vast.impressionUrls()).toContain('http://example.com/track/impression-parent');
  });

  it('should use the creatives from the final location', () => {
    expect(vast.videos().map(v => v.url())).toContain(
      'https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4'
    );
  });
});
