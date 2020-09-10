import { TestBed } from '@angular/core/testing';

import { CampaignPinNumberServiceService } from './campaign-pin-number-service.service';

describe('CampaignPinNumberServiceService', () => {
  let service: CampaignPinNumberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignPinNumberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
