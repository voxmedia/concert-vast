export default class NodeValue {
  /**
   * Returns the first TEXT or CDATA value from an XML element.
   *
   * @param {DOM Element} el An elemenet with a single CDATA or TEXT entity
   */
  static fromElement(el) {
    const matchedItem = Array.from(el.childNodes).find(n => {
      return (n.nodeType == Node.TEXT_NODE || n.nodeType == Node.CDATA_SECTION_NODE) && !!n.nodeValue.trim();
    });
    return matchedItem ? matchedItem.nodeValue.trim() : null;
  }
}
