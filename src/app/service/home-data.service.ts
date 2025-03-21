import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { QueryParam } from '../util/query-param';
import { UrlFormValue } from '../util/url-form-value';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  requestUrlForm: WritableSignal<UrlFormValue | undefined> = signal(undefined);
  queryParams: Signal<QueryParam[]> = computed(() => {
    const requestUrlForm = this.requestUrlForm();
    if (requestUrlForm) {
      const queryString = requestUrlForm.url.split('?')[1];
      const params: QueryParam[] = [];
      if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        urlParams.forEach((value, key) => {
          params.push({ key, value, description: '' });
        });
      }
      return [...params, { key: '', value: '', description: '' }];
    }
    return [{ key: '', value: '', description: '' }];
  });

  setQueryParams(queryParams: QueryParam[]) {
    this.requestUrlForm.update((value: UrlFormValue | undefined) => {
      if (value === undefined) {
        value = { method: 'GET', url: '' };
      }
      const url = value.url.split('?')[0];
      const params = queryParams
        .filter((param) => param.key && param.value != undefined)
        .map((param) => `${param.key}=${param.value}`)
        .join('&');
      return {
        ...value,
        url: params ? `${url}?${params}` : url,
      };
    });
  }
}
