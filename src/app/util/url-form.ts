import { FormControl } from '@angular/forms';
import { HttpMethod } from './http-method';

export interface UrlForm {
  method: FormControl<HttpMethod>;
  url: FormControl<string>;
}
