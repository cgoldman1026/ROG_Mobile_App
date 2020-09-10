import { TestBed } from '@angular/core/testing';

import { YourProfileService } from './your-profile.service';

describe('YourProfileService', () => {
  let service: YourProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
