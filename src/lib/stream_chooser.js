import { supportedMimeTypes } from './supported_formats'

export default class StreamChooser {
  constructor() {
    this.videos = null
    this.playerWidth = 0
    this.playerHeight = 0
    this.supportedMimeTypes = supportedMimeTypes()
    this.bandwidthInKbs = 0
  }

  useVideosFromMediaFile(mediaFiles) {
    this.videos = mediaFiles
  }

  setPlayerDimensions({ height, width }) {
    this.playerHeight = height
    this.playerWidth = width
  }

  setSupportedMimeTypes(types) {
    this.supportedMimeTypes = types
  }

  setBandwidth(bandwidthInKbs) {
    this.bandwidthInKbs = bandwidthInKbs
  }

  bestVideo() {
    const matchingFormats = this.videos.filter(v => this.compatibleFormats(v))
    console.log('matchingFormats', matchingFormats.map(v => v.mimeType()))

    const closestSize = matchingFormats.sort((a, b) => this.closestSized(a, b))
    console.log(
      'closestSize',
      closestSize.map(v => v.width() + 'x' + v.height() + '@' + v.bitrate())
    )

    const notExceedingBandwidth = closestSize.filter(v =>
      this.underBandwidth(v)
    )
    console.log(
      'notExceedingBandwidth',
      notExceedingBandwidth.map(
        v => v.width() + 'x' + v.height() + '@' + v.bitrate()
      )
    )

    if (matchingFormats.length <= 1) return matchingFormats[0]
    if (closestSize.length <= 1) return closestSize[0]
    if (notExceedingBandwidth.length == 0) return closestSize[0]

    return notExceedingBandwidth[0]
  }

  /**
   * Returns true of this video is playable on the device/browser
   * Follows the filter callback interface
   * @param {MediaElement} video
   */
  compatibleFormats(video) {
    return this.supportedMimeTypes.indexOf(video.mimeType()) != -1
  }

  /**
   * Sorts the videos interms of the closest one to the playersize
   * This follows the sort callback interface.
   *
   * @param {MediaElement} a the first video in the sort params
   * @param {MediaElement} b the second video in the sort params
   */
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

  /**
   * Returns true if the video's bandwidth is at or below
   * the calculated bandwidth
   * Conforms to the filter callback interface
   * @param {MediaElement} video
   */
  underBandwidth(video) {
    const OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION = 1.25
    return (
      video.bitrate() <=
      this.bandwidthInKbs * OVERHEAD_FACTOR_FOR_BANDWIDTH_CALCULATION
    )
  }
}