import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('Vast Impressions', () => {
  let xmlString;

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml');
  });

  it('should return a series of impression urls', () => {
    const vast = new Vast({ xml: xmlString });
    expect(vast.impressionUrls).not.toBe(undefined);
    expect(vast.impressionUrls()[0]).toMatch(/^https:\/\/googleads4/);
    expect(vast.impressionUrls().length).toBe(2);
  });

  it('should be able to insert these images directly into the document', () => {
    const vast = new Vast({ xml: xmlString });
    expect(vast.addImpressionUrls).not.toBe(undefined);
    vast.addImpressionUrls();

    const images = Array.from(document.querySelectorAll('img'));
    expect(images.length).toBe(2);
    expect(images[0].src).toBe(vast.impressionUrls()[0]);
  });

  it('should be able to add images to a different document', () => {
    const fakeDoc = {
      createElement: jest.fn(t => {
        return { style: {} };
      }),
      body: {
        appendChild: jest.fn(t => {}),
      },
    };

    const vast = new Vast({ xml: xmlString });
    vast.addImpressionUrls(fakeDoc);
    expect(fakeDoc.createElement.mock.calls.length).toBe(2);
    expect(fakeDoc.body.appendChild.mock.calls.length).toBe(2);
  });
});
