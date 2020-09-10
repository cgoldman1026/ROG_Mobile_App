import { TestBed } from '@angular/core/testing';

import { PickYourRewardService } from './pick-your-reward.service';

describe('PickYourRewardService', () => {
  let service: PickYourRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickYourRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
