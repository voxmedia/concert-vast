export default class Vast {
  constructor({xml, url} = {}) {
    this.vastXml = xml
    this.vastUrl = url

    if(this.vastXml == undefined &&
       this.vastUrl == undefined){
      throw TypeError('Vast constructor expects either a xml or an url argument to be passed');
    }
  }

  parse() {
    const parser = new DOMParser();
    this.parsedVast =  parser.parseFromString(this.vastXML, "application/xml")
    return this.parsedVast.toString();
  }
}
