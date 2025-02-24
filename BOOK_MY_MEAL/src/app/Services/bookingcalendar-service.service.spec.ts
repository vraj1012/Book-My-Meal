import { TestBed } from '@angular/core/testing';

import { BookingcalendarServiceService } from './bookingcalendar-service.service';

describe('BookingcalendarServiceService', () => {
  let service: BookingcalendarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingcalendarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
