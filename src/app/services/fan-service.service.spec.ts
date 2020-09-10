import { TestBed } from '@angular/core/testing';

import { FanServiceService } from './fan-service.service';

describe('FanServiceService', () => {
  let service: FanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
