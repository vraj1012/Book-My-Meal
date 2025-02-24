import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoupondetailsServiceService {

  private apiUrl = "https://localhost:7085";

  constructor(private http : HttpClient) { }

  //METHOD TO FETCH COUPONS AS PER EMPLOYEEID
  GetCouponDetailsByEmployeeId(employeeID: number)
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.get(`${this.apiUrl}/api/CouponDetails/${employeeID}`,{headers});
  }

  //METHOD TO REDEEM COUPON
  RedeemCoupon(couponNumber : number)
  {
    var headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    return this.http.post(`${this.apiUrl}/api/CouponDetails/${couponNumber}`,couponNumber,{headers});
  }

}
