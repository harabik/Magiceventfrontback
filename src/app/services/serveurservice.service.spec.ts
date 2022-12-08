import { TestBed } from '@angular/core/testing';

import { ServeurserviceService } from './serveurservice.service';

describe('ServeurserviceService', () => {
  let service: ServeurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
