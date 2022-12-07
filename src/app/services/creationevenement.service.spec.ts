import { TestBed } from '@angular/core/testing';

import { CreationevenementService } from './creationevenement.service';

describe('CreationevenementService', () => {
  let service: CreationevenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationevenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
