import { TestBed } from '@angular/core/testing';
import { QueryParam } from '../util/query-param';
import { HomeDataService } from './home-data.service';

describe('HomeDataService', () => {
  let service: HomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set query parameters correctly when requestUrlForm is undefined', () => {
    const queryParams: QueryParam[] = [
      { key: 'param1', value: 'value1', description: '' },
      { key: 'param2', value: 'value2', description: '' },
    ];

    service.setQueryParams(queryParams);

    const result = service.requestUrlForm();
    expect(result).toEqual({
      method: 'GET',
      url: '?param1=value1&param2=value2',
    });
  });

  it('should append query parameters to an existing URL', () => {
    service.requestUrlForm.set({ method: 'POST', url: 'http://example.com' });

    const queryParams: QueryParam[] = [
      { key: 'param1', value: 'value1', description: '' },
      { key: 'param2', value: 'value2', description: '' },
    ];

    service.setQueryParams(queryParams);

    const result = service.requestUrlForm();
    expect(result).toEqual({
      method: 'POST',
      url: 'http://example.com?param1=value1&param2=value2',
    });
  });

  it('should handle empty query parameters', () => {
    service.requestUrlForm.set({ method: 'GET', url: 'http://example.com' });

    const queryParams: QueryParam[] = [];

    service.setQueryParams(queryParams);

    const result = service.requestUrlForm();
    expect(result).toEqual({
      method: 'GET',
      url: 'http://example.com',
    });
  });
});
