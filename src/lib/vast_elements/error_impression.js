import Impression from './impression'

export default class ErrorImpression extends Impression {
  setup() {
    this._impressionUrls = []
  }

  static selector() {
    return 'Ad Error'
  }
}
