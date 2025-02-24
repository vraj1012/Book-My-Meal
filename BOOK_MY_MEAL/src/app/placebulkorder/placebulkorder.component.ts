import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { OrderlogsServiceService } from '../Services/orderlogs-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-placebulkorder',
  templateUrl: './placebulkorder.component.html',
  styleUrls: ['./placebulkorder.component.css']
})
export class PlacebulkorderComponent {

  constructor (private orderlogsService : OrderlogsServiceService,private route:Router,private _snackBar : MatSnackBar) { }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  placebulkorderForm = new FormGroup({
    employeeidbookedfor:new FormControl('',[Validators.required]),
    mealtype:new FormControl('',[Validators.required]),
    bookinginitialdate:new FormControl('',[Validators.required]),
    bookingenddate:new FormControl('',[Validators.required])
  })

  get employeeidbookedby()
  {
    return this.placebulkorderForm.get('employeeidbookedby');
  }

  get employeeidbookedfor()
  {
    return this.placebulkorderForm.get('employeeidbookedfor');
  }

  get mealtype()
  {
    return this.placebulkorderForm.get('mealtype');
  }

  get bookinginitialdate()
  {
    return this.placebulkorderForm.get('bookinginitialdate');
  }

  get bookingenddate()
  {
    return this.placebulkorderForm.get('bookingenddate');
  }

  employeeid = Number(localStorage.getItem('EMPLOYEEID'));

  placebulkorderFormSubmit(){
    
    var  formData= this.placebulkorderForm.value; 
    console.log(`Form Data : ${JSON.stringify(formData)}`);
    var employeeidbookedfor = Number(formData['employeeidbookedfor']);
    var mealtype = formData['mealtype'] as string;
    var bookinginitialdate : any= formData['bookinginitialdate'] as string ;
    var bookingenddate : any = formData['bookingenddate'] as string;
    var orderid = 0;
    var ordertype = '';
    var bookingdate = '';
    var amount = 0;
    var orderstatus = '';

     this.orderlogsService.PlaceBulkOrder({
                                        "ORDERID":orderid,
                                        "EMPLOYEEIDBOOKEDBY":this.employeeid,
                                        "EMPLOYEEIDBOOKEDFOR":employeeidbookedfor,
                                        "ORDERTYPE":ordertype,
                                        "MEALTYPE":mealtype,
                                        "BOOKINGDATE":bookingdate,
                                        "BOOKINGINITIALDATE":bookinginitialdate,
                                        "BOOKINGENDDATE":bookingenddate,
                                        "AMOUNT":amount,
                                        "ORDERSTATUS":orderstatus
                                      }).subscribe((result) => {
     //console.log(result);
     if(result!=null){
       //alert("Order Placed Successfully !");
       this.openSnackBar('Order Placed Successfully !','Ok');
       if(Number(localStorage.getItem('EMPLOYEEID'))===1)
       {
       this.orderlogsService.NotifyEmployeeForOrderBookingByAdmin().subscribe();
       this.route.navigate(['/app-orderhistory']);
       }
       else{
        console.log(`Not Booked By Admin`);
       }
       this.route.navigate(['/app-orderhistory']);
     }
   
     },(error)=>{
       //alert("Could not place your order!")
       this.openSnackBar('Could not place your order!','Ok');
       //console.log(error);
       
     }
     
     );
     
   }

}
