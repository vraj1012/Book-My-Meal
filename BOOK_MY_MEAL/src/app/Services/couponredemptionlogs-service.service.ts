import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CouponRedemptionLogs } from '../Modal/CouponRedemptionLogs';

@Injectable({
  providedIn: 'root'
})
export class CouponredemptionlogsServiceService {

  constructor(private http : HttpClient) { }

  private apiUrl = "https://localhost:7085";

  GetRedeemedCouponDetails(employeeID : number)
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.apiUrl}/api/CouponRedemptionLogs/${employeeID}`,{headers});
  }
}
