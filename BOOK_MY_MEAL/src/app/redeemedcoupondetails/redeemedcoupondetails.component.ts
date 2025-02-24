import { Component } from '@angular/core';
import { CouponredemptionlogsServiceService } from '../Services/couponredemptionlogs-service.service';
import { CouponRedemptionLogs } from '../Modal/CouponRedemptionLogs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redeemedcoupondetails',
  templateUrl: './redeemedcoupondetails.component.html',
  styleUrls: ['./redeemedcoupondetails.component.css']
})
export class RedeemedcoupondetailsComponent {

  constructor(private couponredemptionlogsService : CouponredemptionlogsServiceService,private route : Router) { }

  employeeID = Number(localStorage.getItem('EMPLOYEEID'));
  dataSource : any;

  displayedColumns: string[] = ['Redeemed Coupon Details']
  
  GetRedeemedCouponDetails()
  {
    this.couponredemptionlogsService.GetRedeemedCouponDetails(this.employeeID).subscribe((result) => {
      console.log(result);
      this.dataSource = result;
    })
  }



  ngOnInit()
  {
    this.GetRedeemedCouponDetails();
   
  }

  showedRedeemedCouponDetails()
  {
    this.route.navigate(['/app-home']); 
  }

}
