import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('Media Files extension', () => {
  let xmlString;
  let vast;

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast.xml');
    vast = new Vast({ xml: xmlString });
  });

  it('should be able to return all the tracking events for a given name', () => {
    expect(typeof vast.trackingUrlsFor).toBe('function');
  });

  it('should be return an enumerable Array of the tracking urls for a given name', () => {
    expect(vast.trackingUrlsFor('start').constructor).toBe(Array);
  });

  it('should be able to return all the tracking events for a given name', () => {
    expect(vast.trackingUrlsFor('start')[0]).toMatch(/^https:/);
    expect(vast.trackingUrlsFor('firstQuartile')[0]).toMatch(/^https:/);
  });

  it('should be able return all the tracking events for a given name', () => {
    expect(vast.trackingUrlsFor('start').length).toEqual(2);
  });

  it('should return an empty array if there are no tracking events matching this tracker', () => {
    expect(vast.trackingUrlsFor('hiThereMessay')).toEqual([]);
  });

  describe('Media Files extension', () => {
    it('should be able to add an impression tracker to the page for a key', () => {
      expect(typeof vast.addImpressionTrackingImagesFor).toBe('function');
    });

    it('should return nothing when adding images to the doc', () => {
      expect(vast.addImpressionTrackingImagesFor('start')).toBe(undefined);
    });

    it('should add some images to the document', () => {
      const existingImages = document.querySelectorAll('img').length;
      vast.addImpressionTrackingImagesFor('start');
      expect(document.querySelectorAll('img').length).toBe(2 + existingImages);
    });
  });
});

describe('Progess  with time codes', () => {
  let xml;
  let vast;

  beforeAll(async () => {
    xml = fs.readFileSync('./test/fixtures/vast-progress.xml');
    vast = new Vast();
    await vast.useXmlString(xml);
  });

  it('should return progress percent urls', () => {
    expect(vast.trackingUrlsFor('15%')).toContain('http://example.com/tracking/progress-15-percent');
  });

  it('should return progress timecode urls', () => {
    expect(vast.trackingUrlsFor('00:00:10')).toContain('http://example.com/tracking/progress-10');
    expect(vast.trackingUrlsFor('00:01:40')).toContain('http://example.com/tracking/progress-140');
  });

  it('should return progress timecode urls no matter how they are formatted', () => {
    expect(vast.trackingUrlsFor('10')).toContain('http://example.com/tracking/progress-10');
    expect(vast.trackingUrlsFor('00:10')).toContain('http://example.com/tracking/progress-10');
    expect(vast.trackingUrlsFor('100')).toContain('http://example.com/tracking/progress-140');
  });
});

describe('Return Tracking event names', () => {
  let xml;
  let vast;

  beforeAll(async () => {
    xml = fs.readFileSync('./test/fixtures/vast-progress.xml');
    vast = new Vast();
    await vast.useXmlString(xml);
  });

  it('should return tracking urls with names', () => {
    const eventNamesOffsets = vast.trackingEventNamesWithOffsets();

    expect(eventNamesOffsets['15%']).toBe(2.4);
    expect(eventNamesOffsets['00:01:40']).toBe(100);
    expect(eventNamesOffsets['thirdQuartile']).toBe(12);
  });
});
