import { TestBed } from '@angular/core/testing';

import { AnimateurserviceService } from './animateurservice.service';

describe('AnimateurserviceService', () => {
  let service: AnimateurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
