import Vast from '../../src/lib/vast';
import { VastNetworkError } from '../../src/lib/remote';
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
    // The wrapperUrl should be followed and set as the url
    expect(vast.url()).toBe(
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
  let xml;

  beforeEach(() => {
    mock.setup();

    xml = fs.readFileSync('./test/fixtures/vast-wrapper-loop.xml');
    mock.get('https://forever.vast/', {
      headers: {
        'Content-Length': xml.length,
        'Content-Type': 'application/xml',
      },
      body: xml,
    });
  });

  afterEach(() => mock.teardown());

  it('should throw an error if it traverses/issues too many vast requests', async () => {
    const vast = new Vast();
    let caughtError;
    try {
      await vast.useXmlString(xml);
    } catch (boom) {
      caughtError = boom;
    }

    expect(caughtError).toBeDefined();
    expect(caughtError.constructor).toBe(VastNetworkError);
    expect(caughtError.message).toMatch(/Too Many Vast Wrapper Follows/i);
  });

  it('should place an error pixel on the page on redirects too deep', async () => {
    const existingPixels = window.document.querySelectorAll('img.vast-pixel').length;

    const vast = new Vast();
    try {
      await vast.useXmlString(xml);
    } catch (boom) {}

    expect(window.document.querySelectorAll('img.vast-pixel').length).toBeGreaterThan(existingPixels);
  });
});
