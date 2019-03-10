import NodeValue from '../src/lib/node_value';

describe('Handling white space without breaking a sweat', () => {
  it('should get values with no white space', () => {
    const xml = '<xml><important>123</important></xml>';
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');
    expect(doc.querySelectorAll('important')).toHaveLength(1);
    expect(NodeValue.fromElement(doc.querySelector('important'))).toBe('123');
  });

  it('should handle leading edge white spaces too', () => {
    const el = parsedXmlElementWithValue('\n\n12345');
    expect(NodeValue.fromElement(el)).toBe('12345');
  });
});

describe('Get only the value from the node', () => {
  it('should handle cdata attributes just fine', () => {
    const el = parsedXmlElementWithValue('<![CDATA[hello winston]]>');
    expect(NodeValue.fromElement(el)).toBe('hello winston');
  });

  it('should ignore comment blocks', () => {
    const el = parsedXmlElementWithValue('<!-- ignore this please -->apple sauce');
    expect(NodeValue.fromElement(el)).toBe('apple sauce');
  });
});

const parsedXmlElementWithValue = (value = 123) => {
  const xml = `<xml><important>${value}</important></xml>`;
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  return doc.querySelector('important');
};
