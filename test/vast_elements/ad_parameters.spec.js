import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('AdParameters', () => {
  let vast;

  beforeAll(() => {
    const xmlString = fs.readFileSync('./test/fixtures/vast.xml');
    vast = new Vast({ xml: xmlString });
  });

  it('should return an ad parameter', () => {
    expect(vast.adParameters()).not.toBe(undefined);
    expect(vast.adParameters()).toMatch(/xml version=/);
  });
});
