import { TestBed } from '@angular/core/testing';

import { TraiteurserviceService } from './traiteurservice.service';

describe('TraiteurserviceService', () => {
  let service: TraiteurserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraiteurserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
