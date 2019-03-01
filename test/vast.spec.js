import Vast, { VastXMLParsingError, VastNetworkError } from '../src/lib/vast';
import * as fs from 'fs';

const REMOTE_URL =
  'https://ad.doubleclick.net/ddm/pfadx/N884.154386.EATER.COM/B21643693.231589573;sz=0x0;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;dcmt=text/xml';

describe('Basic Vast class functions', () => {
  it('it can be instantiated with an xml string', () => {
    const vast = new Vast({ xml: '' });
  });

  it('handles valid xml and parses it', () => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml');
    const vast = new Vast({ xml: xmlString });
    vast.parse();
  });
});

describe('Internal Error Handling', () => {
  let vast;
  beforeEach(() => {
    vast = new Vast({ xml: fs.readFileSync('./test/fixtures/vast.xml') });
  });

  it('should pass an XML parse error to the callback', async () => {
    let caughtError;
    try {
      await vast.useXmlString('not real xml');
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError.constructor).toBe(VastXMLParsingError);

    caughtError = null;
    try {
      await vast.useXmlString('not real xml');
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError.message).toMatch(/error parsing/i);
  });

  it('should pass a network error to callback', async () => {
    mockXhr('error');

    let caughtError;
    try {
      await vast.loadRemoteVast('http://doodle.com');
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError.constructor).toBe(VastNetworkError);
    expect(caughtError.message).toMatch(/network error/i);
    expect(caughtError.message).toMatch(/status/i);
  });

  it('should send a network error, on timeout', async () => {
    mockXhr('timeout', '', 10);

    let caughtError;
    try {
      await vast.loadRemoteVast('http://doodle.com');
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError.constructor).toBe(VastNetworkError);
    expect(caughtError.message).toMatch(/timeout/i);
  });
});

describe('vast remote xml loading', () => {
  beforeEach(() => {
    const responseXml = fs.readFileSync('./test/fixtures/vast.xml');
    mockXhr('load', responseXml);
  });

  it('it can be loaded from a remote url', async () => {
    const vast = new Vast();
    await vast.loadRemoteVast(REMOTE_URL);
    const videos = vast.videos();
    expect(videos.length).toBeGreaterThan(2);
  });

  it('provides bandwidth estimates', async () => {
    const vast = new Vast();
    await vast.loadRemoteVast(REMOTE_URL);
    expect(vast.bandwidth()).toBeGreaterThan(1000);
  });

  it('should have zero bandwith estimate before request', () => {
    const vast = new Vast();
    expect(vast.bandwidth()).toBe(0);
  });

  it('should allow for a new timeout value to be set', async () => {
    // TODO: I don't know how to test this
    // const vast = new Vast()
    // mockXhr('load', '<xml></xml>', 100)
    // await vast.loadRemoteVast(REMOTE_URL, {timeout: 1})
    // expect(caughtError.constructor).toBe(VastNetworkError)
  });
});

describe('Vast Videos', () => {
  let xmlString;

  beforeEach(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml');
  });

  it('can return a list of video files', () => {
    const vast = new Vast({ xml: xmlString });
    const videos = vast.videos();
    expect(videos.length).toBe(10);
  });
});

/**
 * This is a bit of a mess, but it allows XHR requests to be mocked
 * and certain events to be stimulated after some time.
 * It is deterministic too
 *
 * @param {String} eventToFire The event to fire
 * @param {String} response The value to set response and responseText to
 * @param {Integer} eventDelay The delay in MS before firing the event specified
 */
const mockXhr = (eventToFire = 'load', response = '', eventDelay = 100) => {
  const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    responseText: response,
    response: response,
    addEventListener: jest.fn((eventName, func) => {
      if (eventName == eventToFire) {
        setTimeout(() => {
          func({ message: eventToFire });
        }, eventDelay);
      }
    }),
    setRequestHeader: jest.fn(),
  });
  window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
};

describe('Vast tag is capable of returning the best video', () => {
  let vast;
  beforeAll(() => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml');
    vast = new Vast({ xml: xmlString });
  });

  it('supports bestVideo function', () => {
    expect(typeof vast.bestVideo).toBe('function');
    const vid = vast.bestVideo({ mimeTypes: ['video/mp4'] });
    expect(vid.constructor.name).toBe('MediaFile');
  });
});
