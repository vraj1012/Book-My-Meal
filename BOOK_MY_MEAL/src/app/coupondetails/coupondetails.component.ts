import { Component } from '@angular/core';
import { CoupondetailsServiceService } from '../Services/coupondetails-service.service';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RedeemdialogComponent } from '../redeemdialog/redeemdialog.component';

@Component({
  selector: 'app-coupondetails',
  templateUrl: './coupondetails.component.html',
  styleUrls: ['./coupondetails.component.css']
})
export class CoupondetailsComponent {

  constructor(private coupondetailsService : CoupondetailsServiceService,public dialog : MatDialog) { }

  dataSource : any ;

  displayedColumns: string[] = ['CouponID','EmployeeID','Employee Name','OrderID','Meal Type','Coupon Number','Date of Redemption','Day of Redemption','Redeem']

  employeeID = Number(localStorage.getItem('EMPLOYEEID'));

  //METHOD TO FETCH EMPLOYEE COUPONS 
  GetCouponDetailsByEmployeeId(employeeID: number)
  {
    this.coupondetailsService.GetCouponDetailsByEmployeeId(employeeID).subscribe(r=>{
      console.log(r);
      this.dataSource = r;
    })
  }

  ngOnInit()
  {
    this.GetCouponDetailsByEmployeeId(this.employeeID);
  }

  
  redeemCouponNumber :any;
  openRedeemDialog(couponNumber:number)
  {
    this.redeemCouponNumber = couponNumber
    let dialogref = this.dialog.open(RedeemdialogComponent,{data : {couponNumber : Number(this.redeemCouponNumber)}});
    
  }

}
