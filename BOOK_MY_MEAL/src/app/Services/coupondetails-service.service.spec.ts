import { TestBed } from '@angular/core/testing';

import { CoupondetailsServiceService } from './coupondetails-service.service';

describe('CoupondetailsServiceService', () => {
  let service: CoupondetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoupondetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
