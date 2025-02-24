import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { OrderlogsServiceService } from '../Services/orderlogs-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-placequickmealdialog',
  templateUrl: './placequickmealdialog.component.html',
  styleUrls: ['./placequickmealdialog.component.css']
})
export class PlacequickmealdialogComponent {

  constructor (@Inject(MAT_DIALOG_DATA) public data: any,private route:Router,private orderlogsService : OrderlogsServiceService,
  private dialogRef : MatDialog, private _snackBar : MatSnackBar ) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  quickmealType : any;

  placequickmealForm = new FormGroup({
    mealtype:new FormControl('',[Validators.required])
  })
  
  get mealtype()
  {
    return this.placequickmealForm.get('mealtype');
  }

  employeeid = Number(localStorage.getItem('EMPLOYEEID'));

  placesingleorderFormSubmit(){
    
    var  formData= this.placequickmealForm.value; 
    var mealtype = formData['mealtype'] as string;
    var bookinginitialdate: any = '2023-12-11T12:22:24.951Z' as string;
    var bookingenddate : any = '2023-12-11T12:22:24.951Z' as string;
    var orderid = 0;
    var ordertype = '';
    var bookingdate = '';
    var amount = 0;
    var orderstatus = '';

     this.orderlogsService.PlaceSingleOrder({
                                        "ORDERID":orderid,
                                        "EMPLOYEEIDBOOKEDBY":this.employeeid,
                                        "EMPLOYEEIDBOOKEDFOR":this.employeeid,
                                        "ORDERTYPE":ordertype,
                                        "MEALTYPE":mealtype,
                                        "BOOKINGDATE":bookingdate,
                                        "BOOKINGINITIALDATE":bookinginitialdate,
                                        "BOOKINGENDDATE":bookingenddate,
                                        "AMOUNT":amount,
                                        "ORDERSTATUS":orderstatus
                                      }).subscribe((result) => {
     console.log(result);
     if(result!=null){
       //alert("Quick Meal Order Placed Successfully !")
       this.openSnackBar('Quick Meal Order Placed Successfully !','Ok');
       if(Number(localStorage.getItem('EMPLOYEEID'))===1)
       {
       this.orderlogsService.NotifyEmployeeForOrderBookingByAdmin().subscribe();      
       this.route.navigate(['/app-orderhistory']);
       }
       else{
        console.log(`Not Booked By Admin`);
       }
       this.dialogRef.closeAll();
       this.route.navigate(['/app-orderhistory']);      
     }
   
     },(error)=>{
       //alert("Could not place your quick meal order!")
       this.openSnackBar('Could not place your quick meal order!','Ok');
       //console.log(error);
       
     }
     
     );
     
   }


}
