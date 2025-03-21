import { HttpMethod } from './http-method';

export interface UrlFormValue {
  method: HttpMethod;
  url: string;
}
