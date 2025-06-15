import { TestBed } from '@angular/core/testing';

import { WebServices } from './web-services';

describe('WebServices', () => {
  let service: WebServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
