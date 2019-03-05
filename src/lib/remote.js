export class VastNetworkError extends Error {}

export default class Remote {
  static async loadVast({ url, timeout, onBandwidthUpdate } = { timeout: 10000, onBandwidthUpdate: () => {} }) {
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
