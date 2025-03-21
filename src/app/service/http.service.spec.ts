import { TestBed } from '@angular/core/testing';

import { UrlFormValue } from '../util/url-form-value';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add https to a URL without protocol', () => {
    const url = 'example.com';
    const result = service['addHttps'](url);
    expect(result).toBe('https://example.com');
  });

  it('should not modify a URL with http protocol', () => {
    const url = 'http://example.com';
    const result = service['addHttps'](url);
    expect(result).toBe('http://example.com');
  });

  it('should not modify a URL with https protocol', () => {
    const url = 'https://example.com';
    const result = service['addHttps'](url);
    expect(result).toBe('https://example.com');
  });

  it('should send a request with the correct URL and method', async () => {
    const form: UrlFormValue = { url: 'example.com', method: 'GET' };
    const fetchSpy = spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response())
    );

    await service.sendRequest(form);

    expect(fetchSpy).toHaveBeenCalledWith('https://example.com', {
      method: 'GET',
    });
  });
});
