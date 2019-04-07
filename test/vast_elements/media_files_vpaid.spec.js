import Vast from '../../src/lib/vast';
import * as fs from 'fs';

describe('Basic VPAID URL', () => {
  let vast;

  beforeAll(() => {
    const xmlString = fs.readFileSync('./test/fixtures/vast-vpaid.xml');
    vast = new Vast({ xml: xmlString });
  });

  it('should skip VPAID media files in videos', () => {
    expect(vast.vpaidUrl()).toEqual(
      'https://s-static.innovid.com/mobileapps/s/js/vpaid/1ltnmb?cb=2fbec1ca-5545-b819-8587-2688fe49a246&deviceid=&ivc=iv_geo_dma%3D679%26iv_geo_country%3DUS%26iv_geo_city%3DDes+Moines%26iv_geo_state%3DIA%26iv_geo_zip%3D50310%26iv_geo_lat%3D41.6244%26iv_geo_lon%3D-93.6694'
    );
  });
});
