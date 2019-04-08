import AdapterBase from './base';

export default class VPAID extends AdapterBase {
  constructor(vast) {
    super(vast);
    this.enabled = true;
    this.url = null;
    this.application = null;
    this.iframe = null;
    this.vpaidProxy = null;
  }

  vastLoaded() {
    const url = this.vast.vpaidUrl();
    if (url) {
      this.url = this.vast.vpaidUrl();
      console.log('vpaid url', this.url);
      this.setup();
    }
  }

  videoApplied(application) {
    console.log('app', application[0]);
    this.application = application[0];
    this.setup();
  }

  setup() {
    if (this.iframe) return;

    if (this.url && this.application) {
      console.log('setting up things');
      console.log('this.app', this.application);
      const player = this.application.player();
      const doc = player.ownerDocument;

      this.iframe = doc.createElement('iframe');

      doc.body.appendChild(this.iframe);
      const iframeDoc = this.iframe.contentDocument;
      const vpaidScriptElement = iframeDoc.createElement('script');

      vpaidScriptElement.addEventListener('load', () => {
        console.log('script loaded');
        const vpaidInit = this.iframe.contentWindow['getVPAIDAd'];
        this.vpaidProxy = vpaidInit();
        console.log('vpaid', this.vpaidProxy);
      });

      vpaidScriptElement.src = this.url;
      iframeDoc.body.appendChild(vpaidScriptElement);
    }
  }
}
