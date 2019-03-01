export default class VastElementBase {
  constructor(vastBase) {
    this.vast = vastBase;
    this.setup();
    this.elements = [];
  }

  // Selector to determine applicable vast elements
  static selector() {}

  // Subclasses have be loaded
  setup() {}

  // Vast file has been loaded and is ready to use
  onVastReady() {}

  // ----
  process() {
    if (!this.vast.vastDocument) return;

    const selector = this.constructor.selector();

    this.elements = this.elements.concat(Array.from(this.vast.vastDocument.querySelectorAll(selector)));
    this.onVastReady();
  }

  addImpressionUrl(url, { doc, name } = { doc: document, name: '' }) {
    const impressionImage = doc.createElement('img');
    impressionImage.style.height = 1;
    impressionImage.style.width = 1;
    impressionImage.style.top = 0;
    impressionImage.style.left = 0;
    impressionImage.style.visibility = 'hidden';
    impressionImage.className = 'vast-pixel';
    impressionImage.src = url;
    if (name) {
      impressionImage.setAttribute('data-for', name);
    }
    doc.body.appendChild(impressionImage);
  }
}
