import { TestBed } from '@angular/core/testing';

import { CouponredemptionlogsServiceService } from './couponredemptionlogs-service.service';

describe('CouponredemptionlogsServiceService', () => {
  let service: CouponredemptionlogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponredemptionlogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
