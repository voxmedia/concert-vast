export default class VastElementBase {
  constructor(vastBase) {
    this.vast = vastBase
    this.setup()
    this.extendVastBaseWithPublicMethods()
    this.elements = []
  }

  // Selector to determine applicable vast elements
  static selector() {}

  // Subclasses have be loaded
  setup() {}

  // Vast file has been processed
  processed() {}

  // Use this call to extend the underlying vast
  // class with the methods you need to support
  extendVastBaseWithPublicMethods() {}

  // ----
  process() {
    if (!this.vast.vastDocument) return;

    const selector = this.constructor.selector()

    this.elements = Array.from(
      this.vast.vastDocument.querySelectorAll(selector)
    )
    this.processed()
  }
}
