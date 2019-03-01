export default class NodeValue {
  static fromElement(el) {
    const matchedItem = Array.from(el.childNodes).find(n => {
      return (n.nodeType == Node.TEXT_NODE || n.nodeType == Node.CDATA_SECTION_NODE) && !!n.nodeValue.trim();
    });
    return matchedItem ? matchedItem.nodeValue.trim() : null;
  }
}
