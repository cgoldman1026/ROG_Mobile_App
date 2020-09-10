import { TestBed } from '@angular/core/testing';

import { CreateYourAccountServiceService } from './create-your-account-service.service';

describe('CreateYourAccountServiceService', () => {
  let service: CreateYourAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateYourAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
