# Concert Vast Parser

This is the Concert Vast Parser. It consumes simple inline video VAST tags and provides a nice wrapper to interact with the XML response in a Concert-opinionated way.

### Using this library

```js
// Find the video element on the page
const videoElement = document.querySelector('video')

// Instantiate a new ConcertVast object
const cv = new ConcertVast()

// Load the VAST URL, this is async so you can use
// await or .then() to delay execution until the vast
// tag has been parsed
await cv.loadRemoteVast(url)

// Use the rudamentary rendition selection process here
// current accounts for
//   - browser code support,
//   - bitrate (from Vast request) and
//   - player size)
const bestVastVideo = cv.bestVideo({
  height: videoElement.clientHeight,
  width: videoElement.clientWidth,
})

// When using vanilla video element
Array.from(videoElement.querySelectorAll('source')).forEach(s => {
  s.remove()
})
const vidSource = document.createElement('source')
vidSource.setAttribute('src', bestVastVideo.url())
vidSource.setAttribute('type', bestVastVideo.mimeType())
videoElement.appendChild(vidSource)
// Need to call load if you change the video source
videoElement.load()

// Or if using videojs
const player = videoJs(videoElement)
player.src([{ type: bestVastVideo.mimeType(), src: bestVastVideo.url() }])
```

### Clone it and Run it

- Clone this repo
- Run `yarn install`
- Run `yarn test` to run Jest in watch mode.
- Run `yarn build` to update `dist/index.html` to see it in action.

### Remaining Work

1. Test this with the HymnalAd SDK Video player
1. Design error handling
1. Open source it 🙏

### Contributing

- Make a branch
- Add failing tests
- Write code to statisy test
- Make a Pull Request

### Important details:

- es6
- no semicolons _(come at me)_
- Strict TDD via [Jest](https://jestjs.io/)
