import { TestBed } from '@angular/core/testing';

import { EspaceserviceService } from './espaceservice.service';

describe('EspaceserviceService', () => {
  let service: EspaceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
