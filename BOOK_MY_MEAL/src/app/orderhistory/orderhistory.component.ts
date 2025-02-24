import { Component } from '@angular/core';
import { OrderlogsServiceService } from '../Services/orderlogs-service.service';
import { OrderLogs } from '../Modal/OrderLogs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {

  constructor (private orderlogsService : OrderlogsServiceService, private route : Router,private _snackBar : MatSnackBar) 
  { 


  }

  dataSource : any;

  displayedColumns: string[] = ['OrderID','Booked By','Booked For','Order Type','Meal Type','Booked On','Valid From','Valid To','Amount Paid','Status','Cancel']

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  //FETCHING EMPLOYEEID FROM LOCAL STORAGE WHICH WE DECODED FROM OUR GENERATED TOKEN
  EMPLOYEEID  = Number(localStorage.getItem('EMPLOYEEID'))

  GetOrderLogsByEmployeeID(employeeID : number)
  {
    this.orderlogsService.GetOrderLogsByEmployeeID(employeeID).subscribe(r => {
      //console.log(r);
      this.dataSource=r;
    })
  }

  // ALL ORDER HISTORY SHOULD GET LOADED AS SOON AS EMPLOYEE OPENS THIS COMPONENT
  ngOnInit()
  {
    this.GetOrderLogsByEmployeeID(this.EMPLOYEEID);
  }

  //METHOD TO NOTIFY ADMIN FOR ORDER CANCELLATION
  NotifyAdmin()
  {
    this.orderlogsService.NotifyAdminForOrderCancellation().subscribe();
  }

  //METHOD TO CANCEL ORDER
  cancelOrder(orderID : number)
  {
      this.orderlogsService.CancelOrder(orderID).subscribe((result)=>{
      this.GetOrderLogsByEmployeeID(this.EMPLOYEEID);
      this.NotifyAdmin();
      //alert('Order Cancelled !');
      this.openSnackBar('Order Cancelled !','Ok');
    }
    )

  }



}
