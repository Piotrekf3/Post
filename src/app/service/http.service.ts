import { Injectable } from '@angular/core';
import { UrlFormValue } from '../util/url-form-value';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  async sendRequest(form: UrlFormValue) {
    form.url = this.addHttps(form.url);
    return fetch(form.url, { method: form.method });
  }

  private addHttps(url: string): string {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    return url;
  }
}
