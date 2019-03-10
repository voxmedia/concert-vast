export class VastNetworkError extends Error {}

export default class Remote {
  /**
   * Fetches a remote XML Vast url. It has no knowledge of XML or the Vast structure
   *
   * @async
   * @param {String} url - Where to download the XML
   * @param {Integer} timeout - time in milleseconds to wait until for remote load
   * @param {Function} onBandwidthUpdate - Callback when there is a new bandwidth estimate available,
   *                                       will be be passed a number representing KB/s
   * @returns {Promise<String>} XML Response from the url
   */
  static async loadUrl({ url, timeout = 10000, onBandwidthUpdate = () => {} }) {
    return new Promise((resolve, reject) => {
      this.vastUrl = url;
      const request = new XMLHttpRequest();
      request.timeout = timeout;
      let startTime;

      request.addEventListener('load', async e => {
        const downloadTime = new Date().getTime() - startTime;
        const downloadSize = request.responseText.length;
        const bandwidthEstimateInKbs = (downloadSize * 8) / (downloadTime / 1000) / 1024;
        onBandwidthUpdate(bandwidthEstimateInKbs);
        resolve(request.response);
      });

      request.addEventListener('error', e => {
        reject(new VastNetworkError(`Network Error: Request status: ${request.status}, ${request.responseText}`));
      });

      request.addEventListener('abort', e => {
        reject(new VastNetworkError('Network Aborted'));
      });

      request.addEventListener('timeout', e => {
        reject(new VastNetworkError(`Network Timeout: Request did not complete in ${timeout}ms`));
      });

      startTime = new Date().getTime();
      request.open('GET', this.vastUrl);
      request.send();
    });
  }
}
