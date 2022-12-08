import { TestBed } from '@angular/core/testing';

import { PhotographeserviceService } from './photographeservice.service';

describe('PhotographeserviceService', () => {
  let service: PhotographeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotographeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
