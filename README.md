# Concert Vast Parser

This is the Concert Vast Parser. It consumes simple inline video VAST tags and provides a nice wrapper to interact with the XML response in a Concert-opinionated way.

### Using this library

The Vast Libary offers high and low level interacition with the Vast format. The following example is the simplest case to implement preroll on a `<video>` element.

```html
<video controls>
  <source src="YOUR GREAT VIDEO URL HERE" type="video/mp4" />
</video>
<script>
  const videoElement = document.querySelector('video');
  const vast = new ConcertVast();
  vast.loadRemoteVast('VAST URL HERE').then(e => {
    vast.applyToVideoElementAsPreroll(videoElement);
  });
</script>
```

It's also possible you don't want the preroll behavior, and you can use:

```js
vast.applyToVideoElement(videoElement);
```

#### Doing it on your own

Here is a sample of the public API that is exposed in the ConcertVast Library _(more documentation coming)_

```js
// Find the video element on the page
const videoElement = document.querySelector('video');

// Instantiate a new ConcertVast object
const cv = new ConcertVast();

// Load the VAST URL, this is async so you can use
// await or .then() to delay execution until the vast
// tag has been parsed
//
// Optionally a timeout parameter (in ms) can be passed in to specify
// how long to wait for a vast response
try {
  await cv.loadRemoteVast(url, { timeout: 10000 });
} catch (error) {
  // if this raises an error, it is for the following reasons:
  // - there was a network error (VastNetworkError)
  // - the XML could not be parsed (VastXMLParsingError)
}

// Use the rudamentary rendition selection process here
// current accounts for
//   - browser code support,
//   - bitrate (from Vast request) and
//   - player size)
const bestVastVideo = cv.bestVideo({
  height: videoElement.clientHeight,
  width: videoElement.clientWidth,
});

// When using vanilla video element
Array.from(videoElement.querySelectorAll('source')).forEach(s => {
  s.remove();
});
const vidSource = document.createElement('source');
vidSource.setAttribute('src', bestVastVideo.url());
vidSource.setAttribute('type', bestVastVideo.mimeType());
videoElement.appendChild(vidSource);
// Need to call load if you change the video source
videoElement.load();

// Or if using videojs
const player = videoJs(videoElement);
player.src([{ type: bestVastVideo.mimeType(), src: bestVastVideo.url() }]);
```

### Documented Functionality

### Clone it and Run it

- Clone this repo
- Run `yarn install`
- Run `yarn test --watch` to run Jest in watch mode.
- Run `yarn dev` to run webpack in dev mode http://localhost:8080 (live reloading is disabled)
- Run `yarn cypress` to run headless end to end integration testing with cypress. Expects the `yarn dev` server to be running.
- Run `yarn cypress-open` to run cypress in visual mode
- Run `yarn build` to build the final js

### Remaining Work

1. ~~Test this with the HymnalAd SDK Video player~~
1. ~~Design error handling~~
1. ~~Open source it 🙏~~

### Contributing

- Make a branch
- Add failing tests
- Write code to statisy test
- Make a Pull Request

### Important details:

- es6
- Strict BDD via [Jest](https://jestjs.io/)

### License

Copyright 2019 Vox Media

Licensed under the Apache License, Version 2.0 (the "License")
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
