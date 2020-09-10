import { TestBed } from '@angular/core/testing';

import { ConfirmCampaignServiceService } from './confirm-campaign-service.service';

describe('ConfirmCampaignServiceService', () => {
  let service: ConfirmCampaignServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmCampaignServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
