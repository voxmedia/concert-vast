import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('AdTagURI extension', () => {
  let xmlString;
  let vast;

  beforeAll(() => {
    xmlString = fs.readFileSync('./test/fixtures/vast-wrapper.xml');
    vast = new Vast({ xml: xmlString });
  });

  it('should find wrapper urls in vast tags', () => {
    expect(typeof vast.wrapperUrl).toBe('function');
  });

  it('should get the wrapper urls in vast tags', () => {
    expect(vast.wrapperUrl()).toBe(
      'https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%203.0%20Samples/Inline_Companion_Tag-test.xml'
    );
  });
});
