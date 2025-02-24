import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoupondetailsServiceService } from '../Services/coupondetails-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-redeemdialog',
  templateUrl: './redeemdialog.component.html',
  styleUrls: ['./redeemdialog.component.css']
})
export class RedeemdialogComponent {

  constructor (@Inject(MAT_DIALOG_DATA) public data: any,private route:Router,private coupondetailsService : CoupondetailsServiceService,
  private dialogRef : MatDialog , private _snackBar : MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  showRedeemedCouponDetails()
  {

    this.coupondetailsService.RedeemCoupon(this.data.couponNumber).subscribe((result) => {
      console.log(`Result : ${result}`);
      if(this.data.couponNumber!=null)
      {
        //alert('Coupon Redeemed Successfully!');
        this.openSnackBar('Coupon Redeemed Successfully!','Ok');
        this.dialogRef.closeAll();
        this.route.navigate(['/app-redeemedcoupondetails']);
        
      }
    },
    (error) => {
      //alert('Could not redeem your coupon !');
      this.openSnackBar('Could not redeem your coupon !','Ok');
      //console.log(error);
      
    }
    
    )

    
  }

  ngOnInit()
  {
    console.log(this.data.couponNumber);
  }
  


}
