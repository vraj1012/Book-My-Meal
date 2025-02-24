import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingcalendarServiceService {

  private apiUrl = "https://localhost:7085";

  constructor(private http : HttpClient) { }

  GetBookingDates(employeeID : number)
  {
    return this.http.get(`${this.apiUrl}/api/BookingCalendar/${employeeID}`);
  }

  GetBookingStartDate(employeeID : number)
  {
    return this.http.get(`${this.apiUrl}/api/BookingCalendar/StartDate/${employeeID}`);
  }

  GetBookingEndDate(employeeID : number)
  {
    return this.http.get(`${this.apiUrl}/api/BookingCalendar/EndDate/${employeeID}`);
  }
}
