import { TestBed } from '@angular/core/testing';

import { SalutationServiceService } from './salutation-service.service';

describe('SalutationServiceService', () => {
  let service: SalutationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalutationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
