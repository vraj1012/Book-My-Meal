import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {OrderLogs } from '../Modal/OrderLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderlogsServiceService {

  private apiUrl = "https://localhost:7085";

  
  constructor(private http: HttpClient) { }

  

  PlaceBulkOrder(ordD : OrderLogs) 
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/api/OrderLogs/PlaceOrderBulk`,ordD,{headers});
  }

  PlaceSingleOrder(ordD : OrderLogs) 
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/api/OrderLogs/PlaceOrderSingle`,ordD,{headers});
  }


  //METHOD TO GET ORDER LOGS AS PER EMPLOYEEID
  GetOrderLogsByEmployeeID(employeeID : number)
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.get<OrderLogs[]>(`${this.apiUrl}/api/OrderLogs/${employeeID}`,{headers});
  }


  //METHOD TO CANCEL EMPLOYEE ORDER FROM ORDER HISTORY TABLE
  CancelOrder(orderID : number)
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.put(`${this.apiUrl}/api/OrderLogs/${orderID}`,orderID,{headers});
  }
  
  NotifyAdminForOrderCancellation()
  {

    return this.http.post(`${this.apiUrl}/api/Email/NotifyAdminForOrderCancellation`,{});
  }

  NotifyEmployeeForOrderBookingByAdmin()
  {
    return this.http.post(`${this.apiUrl}/api/Email/NotifyEmployeeOrderBooking`,{});
  }


}
