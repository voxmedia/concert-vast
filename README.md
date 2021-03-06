# Concert Vast Parser

This is an opinionated and minimal Concert Vast parser. It consumes simple InLine video VAST responses and provides a nice wrapper to interact with the XML response in a Concert-opinionated way.

## Vast Elements Supported

```
                                 ┌─────────────────┐
                                 │                 │
                         ┌──────▶│      Video      │
                         │       │                 │
                         │       └─────────────────┘
                         │
┌─────────────────┐      │       ┌─────────────────┐
│   Inline Vast   │      │       │                 │
│    Document     │──────┼──────▶│  Clickthrough   │
│                 │      │       │                 │
└─▲───────────────┘      │       └─────────────────┘
  :             ;        │
   ╲           ╱         │       ┌─────────────────┐
    `.       ,'          │       │                 │
      `─────'            └──────▶│   Impressions   │
    Wrapper Url                  │                 │
     Following                   └─────────────────┘
                                  Progress, Errors
                                   and Impressions
```

### Concert Vast's Applications for Preroll

The Concert Vast libary offers a high interaction with Vast tags.

As of version 1.0 there are currently two built in Applications:

- **`<video>`** element support via `vast.applyToVideoElementAsPreroll(document.querySelector('video'))`
- **[`videojs`](https://videojs.com/)** support using `applyToVideoJsAsPreroll()`

The following example is the simplest case to implement preroll on a `<video>` element.

```html
<video>
  <source src="YOUR GREAT VIDEO URL HERE" type="video/mp4" />
</video>
<script>
  const videoElement = document.querySelector('video')
  const vast = new ConcertVast()
  vast.loadRemoteVast('VAST URL HERE').then({
    vast.applyToVideoElementAsPreroll(videoElement)
  }).catch(error => {
    // handle any errors here
  })
</script>
```

It's also possible you don't want to load the Vast videos as the main video, in which case the following method is available.

```js
vast.applyToVideoElement(videoElement);
```

For a full demo of this functionality see the examples found in /test/assets/.

### Full API for Granular Control

Here is a sample of a portion of the public API that is exposed in the ConcertVast Library _(more documentation coming)_

_Note: it is important to remember that all network interactions should anticipate delays and failures. To that end all network-possible methods are `async`-based and maybe throw errors._

```js
// Find the video element on the page
const videoElement = document.querySelector('video');

// Instantiate a new ConcertVast object
const vast = new ConcertVast();

// Load the VAST URL, this is async so you can use
// await or .then() to delay execution until the vast
// tag has been parsed
//
// Optionally a timeout parameter (in ms) can be passed in to specify
// how long to wait for a vast response
try {
  await vast.loadRemoteVast(url, { timeout: 10000 });
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
const bestVastVideo = vast.bestVideo({
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
videoElement.load();

// Or if using videojs
const player = videoJs(videoElement);
player.src([{ type: bestVastVideo.mimeType(), src: bestVastVideo.url() }]);
```

### Developing and Contributing

- Clone this repo
- Run `yarn install`
- Run `yarn test --watch` to run Jest in watch mode.
- Run `yarn dev` to run webpack in dev mode http://localhost:8080 (live reloading is disabled)
- Run `yarn cypress` to run headless end to end integration testing with cypress. Expects the `yarn dev` server to be running.
- Run `yarn cypress-open` to run cypress in visual mode
- Run `yarn build` to build the final js

### Contributing

- Make a branch
- Add failing tests
- Write code to satisfy test
- Make a Pull Request

## Versioning and Publishing

1. Update version number in `package.json` using semantic versioning conventions.
2. Update CHANGELOG.md to describe the changes.
3. Run `yarn build`
4. Commit changes, including built distribution files in your branch
5. Write a descriptive PR explaining _what_ changed and _why_

## Releasing a new Version

1. Merge the PR,
2. Create a new release from master with the same version number as identified in the package.json

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
