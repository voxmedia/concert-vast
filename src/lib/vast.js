export default class Vast {
  constructor({xml}) {
    this.vastXml = xml
  }

  parse() {
    const parser = new DOMParser();
    this.parsedVast =  parser.parseFromString(this.vastXML, "application/xml");
    return this.parsedVast
  }
}
