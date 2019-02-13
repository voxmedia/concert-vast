export default class VastElementBase {
  constructor(vastBase) {
    this.vast = vastBase
    this.setup()
    this.elements = []
  }

  // Selector to determine applicable vast elements
  static selector() {}

  // Subclasses have be loaded
  setup() {}

  // Vast file has been loaded and is ready to use
  onVastReady() {}

  // ----
  process() {
    if (!this.vast.vastDocument) return

    const selector = this.constructor.selector()

    this.elements = Array.from(
      this.vast.vastDocument.querySelectorAll(selector)
    )
    this.onVastReady()
  }

  addImpressionUrl(url, { doc } = { doc: document }) {
    const impressionImage = doc.createElement('img')
    impressionImage.style.height = 1
    impressionImage.style.width = 1
    impressionImage.style.top = 0
    impressionImage.style.left = 0
    impressionImage.style.visibility = 'hidden'
    impressionImage.src = url
    doc.body.appendChild(impressionImage)
  }
}
