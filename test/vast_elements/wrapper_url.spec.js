import Vast, { VastNetworkError } from '../../src/lib/vast';
import * as fs from 'fs';
import mock from 'xhr-mock';

describe('Wrapper extension', () => {
  let xmlString;
  let vast;

  beforeAll(async () => {
    xmlString = fs.readFileSync('./test/fixtures/vast-wrapper.xml');
    vast = new Vast();
    await vast.useXmlString(xmlString);
  });

  beforeEach(() => {
    mock.setup();
    const followingXml = fs.readFileSync('./test/fixtures/vast-wrapper-next.xml');
    mock.get(
      'https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%203.0%20Samples/Inline_Companion_Tag-test.xml',
      {
        headers: {
          'Content-Length': followingXml.length,
          'Content-Type': 'application/xml',
        },
        body: followingXml,
      }
    );
  });
  afterEach(() => mock.teardown());

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

describe('Wrapper related errors', () => {
  beforeEach(() => mock.setup());
  afterEach(() => mock.teardown());

  it('should throw an error if it traverses/issues too many vast requests', async () => {
    // No matter what we request always return another wapper version
    const followingXml = fs.readFileSync('./test/fixtures/vast-wrapper.xml');
    mock.get(
      'https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%203.0%20Samples/Inline_Companion_Tag-test.xml',
      {
        headers: {
          'Content-Length': followingXml.length,
          'Content-Type': 'application/xml',
        },
        body: followingXml,
      }
    );

    const xmlString = fs.readFileSync('./test/fixtures/vast-wrapper.xml');
    try {
      const vast = new Vast();
      await vast.useXmlString(xmlString).catch(boom => {
        console.log('caught', boom);
      });
    } catch (e) {
      console.log('caught upper', e);
    }
  });
});
