const STANDARD_FORMATS = {
  ogg: 'video/ogg; codecs="theora"',
  h264: 'video/mp4; codecs="avc1.42E01E"',
  webm: 'video/webm; codecs="vp8, vorbis"',
  vp9: 'video/webm; codecs="vp9"',
};

const HLS_FORMATS = {
  hls: 'application/vnd.apple.mpegurl',
  hlsLegacy: 'application/x-mpegURL',
  hlsLegacyLowercase: 'application/x-mpegurl',
};

export function getHlsFormats(videos) {
  return videos.find(v => hlsFormats(v));
}

function hlsFormats(video) {
  return Object.values(HLS_FORMATS).indexOf(video.mimeType()) != -1;
}

export function supportedFormats({ doc } = { doc: document }) {
  const v = doc.createElement('video');
  let supported = {};
  for (const name in STANDARD_FORMATS) {
    if (v.canPlayType(STANDARD_FORMATS[name]) === 'probably') {
      supported[name] = STANDARD_FORMATS[name];
    }
  }
  return supported;
}

export function supportedMimeTypes({ doc } = { doc: document }) {
  return Object.values(supportedFormats({ doc: doc })).map(mimeTypeAndCode => mimeTypeAndCode.split(';')[0]);
}

export default { supportedFormats, supportedMimeTypes, getHlsFormats };
