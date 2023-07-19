const FORMATS = {
  ogg: 'video/ogg; codecs="theora"',
  h264: 'video/mp4; codecs="avc1.42E01E"',
  webm: 'video/webm; codecs="vp8, vorbis"',
  vp9: 'video/webm; codecs="vp9"',
  hls: 'application/x-mpegURL; codecs="avc1.42E01E"',
};

export function supportedFormats({ doc } = { doc: document }) {
  const v = doc.createElement('video');
  let supported = {};
  for (const name in FORMATS) {
    // J9 HLS
    // if (v.canPlayType(FORMATS[name]) === 'probably') {
    //   supported[name] = FORMATS[name];
    // }

    supported[name] = FORMATS[name];
  }
  return supported;
}

export function supportedMimeTypes({ doc } = { doc: document }) {
  return Object.values(supportedFormats({ doc: doc })).map(mimeTypeAndCode => mimeTypeAndCode.split(';')[0]);
}

export default { supportedFormats, supportedMimeTypes };
