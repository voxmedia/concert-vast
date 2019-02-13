import Vast from './vast'
import { supportedMimeTypes } from './supported_formats'

export default class StreamChooser {
  constructor() {
    this.vast = null
    this.playerWidth = 0
    this.playerHeight = 0
    this.supportedMimeTypes = supportedMimeTypes()
    this.bandwidthInKbs = 0
  }

  useVast(vast) {
    if (vast.constructor.name != 'Vast') {
      throw new TypeError('must be a Vast object', typeof Vast)
    }
    this.vast = vast
    this.setBandWidth(vast.bandwidth())
  }

  setPlayerDimensions({ height, width }) {
    this.playerHeight = height
    this.playerWidth = width
  }

  setSupportedMimeTypes(types) {
    this.supportedMimeTypes = types
  }

  setBandWidth(bandWidthInKbs) {
    this.bandwidthInKbs = bandWidthInKbs
  }

  bestVideo() {
    const matchingFormats = this.vast
      .videos()
      .filter(v => this.compatibleFormats(v))
    console.log('matchingFormats', matchingFormats.map(v => v.mimeType()))

    const closestSize = matchingFormats.sort((a, b) => this.closestSized(a, b))
    console.log(
      'closestSize',
      closestSize.map(v => v.width() + 'x' + v.height())
    )

    const notExceedingBandwidth = closestSize.filter(v =>
      this.underBandwidth(v)
    )
    console.log(
      'notExceedingBandwidth',
      notExceedingBandwidth.map(v => v.width() + 'x' + v.height())
    )

    if (matchingFormats.length <= 1) return matchingFormats[0]
    if (closestSize.length <= 1) return closestSize[0]
    if (notExceedingBandwidth.length == 0) return closestSize[0]

    return notExceedingBandwidth[0]
  }

  compatibleFormats(video) {
    return this.supportedMimeTypes.indexOf(video.mimeType()) != -1
  }

  closestSized(a, b) {
    const aWProximity =
      Math.abs(this.playerWidth - a.width()) / this.playerWidth
    const bWProximity =
      Math.abs(this.playerWidth - b.width()) / this.playerWidth
    const aHProximity =
      Math.abs(this.playerHeight - a.height()) / this.playerHeight
    const bHProximity =
      Math.abs(this.playerHeight - b.height()) / this.playerHeight

    return aWProximity * aHProximity - bWProximity * bHProximity
  }

  underBandwidth(video) {
    return video.bitrate() <= this.bandwidthInKbs * 1.25
  }
}
