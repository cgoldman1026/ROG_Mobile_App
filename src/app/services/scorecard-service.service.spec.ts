import { TestBed } from '@angular/core/testing';

import { ScorecardServiceService } from './scorecard-service.service';

describe('ScorecardServiceService', () => {
  let service: ScorecardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorecardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
