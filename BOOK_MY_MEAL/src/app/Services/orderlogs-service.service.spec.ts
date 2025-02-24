import { TestBed } from '@angular/core/testing';

import { OrderlogsServiceService } from './orderlogs-service.service';

describe('OrderlogsServiceService', () => {
  let service: OrderlogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderlogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
