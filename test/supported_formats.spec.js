import { supportedFormats } from '../src/lib/supported_formats';

describe('Supported format detection', () => {
  it('should return a bunch of formats', () => {
    // this is a total hack, it works fine in the browser
    const fakeDoc = {
      createElement: jest.fn(t => {
        if (t == 'video') {
          return {
            canPlayType: mime => {
              if (mime.match(/mp4/)) {
                return 'probably';
              }
            },
          };
        }
      }),
    };

    const f = supportedFormats({ doc: fakeDoc });
    expect(Object.keys(f).length).toBe(1);
  });
});
