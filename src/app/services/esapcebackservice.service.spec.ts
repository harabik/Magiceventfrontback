import { TestBed } from '@angular/core/testing';

import { EsapcebackserviceService } from './esapcebackservice.service';

describe('EsapcebackserviceService', () => {
  let service: EsapcebackserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsapcebackserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
