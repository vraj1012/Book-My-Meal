import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BookingcalendarServiceService } from '../Services/bookingcalendar-service.service';
import { PlacequickmealdialogComponent } from '../placequickmealdialog/placequickmealdialog.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private route : Router,private bookingcalendarService : BookingcalendarServiceService,public dialog : MatDialog) { }

  dateData : any;

  employeeid = Number(localStorage.getItem('EMPLOYEEID'));

  getBookingDates(){
    this.dateData = this.bookingcalendarService.GetBookingDates(Number(localStorage.getItem('EMPLOYEEID'))).subscribe
 
  }

  //GET EMPLOYEE'S BOOKING START DATE OF LATEST ORDER
  startDate :any;
  s : any;
  
  GetBookingStartDate()
  {
      this.bookingcalendarService.GetBookingStartDate(this.employeeid).subscribe((result)=>{
      this.startDate=result;
      for (let key in this.startDate)
      {
        this.s = this.startDate[key]
        console.log(this.s);
      }
      localStorage.setItem('start',this.s)
    
    });
  }

  endDate : any;
  e : any;
  //GET EMPLOYEE'S BOOKING END DATE OF LATEST ORDER
  GetBookingEndDate()
  {
    this.bookingcalendarService.GetBookingEndDate(this.employeeid).subscribe((result) => {
      this.endDate = result;
      for(let key in this.endDate)
      {
        this.e = this.endDate[key]
        console.log(this.e);
      }
      localStorage.setItem('end',this.e)
      // return new Date(this.e);
      
    })
  }

  ngOnInit(){
    //console.log(this.startDate);
   this.GetBookingStartDate();
   this.GetBookingEndDate();
   this.disableButton();
  }

  //DISABLE BUTTON FROM 8PM
  disableButton(): boolean
   {
    let currentDateTime = new Date();
    let timeinHour = currentDateTime.getHours();

    if (timeinHour >= 20) 
    {
      return  true
    }
    else 
    { 
      return false 
    }
  }

  
  //NAVIGATE TO BULK FORM USING PLACE BULK ORDER BUTTON
  placebulkorderShow()
  {
    this.route.navigate(['/app-placebulkorder']);
  }

  //METHOD TO OPEN DIALOG BOX FOR CHOOSING QUICK MEAL TYPE
  openPlaceQuickMealDialog()
  {
  this.dialog.open(PlacequickmealdialogComponent);
  }

  // full calendar

blockedDates:string[]=['2023-12-07','2023-12-19','2023-12-25']
startDates= localStorage.getItem('start');
endDates=localStorage.getItem('end')
public calendarOptions: CalendarOptions = {
 
   initialView: 'dayGridMonth',   
   weekends: false,
   plugins: [dayGridPlugin],
   events: [
     // Add booked date as a separate event
     {
      
       id: 'booked-date',
       start:`${this.startDates}`,
       end: `${this.endDates}`,
       rendering: 'background',
       color: 'green',
       title: 'Booking Date'
     },
   ],
   eventSources: [
     // Add blocked dates using a function
     (fetchInfo, successCallback) => {
       successCallback(this.blockedDates.map(date => ({
         id: 'blocked-date',
         start: date,
         rendering: 'background',
         color: 'red',
         title: 'Blocked Date'
       })));
     }
   ]
 };

 blockDate(blockedDate: string,BookDate:string, calendarApi: any) {
   const blockedDateObj = new Date(blockedDate);
   const bookedDateObj = new Date(BookDate);

   if (blockedDateObj && bookedDateObj) {
     calendarApi.addEvent({
       id: 'blocked-date',
       start: blockedDateObj,
       end: blockedDateObj,
       rendering: 'background',
       color: 'red'
     });

     calendarApi.addEvent({
       id: 'booked-date',
       start: bookedDateObj,
       end: bookedDateObj,
       rendering: 'background',
       color: 'green'
     });
   }
 }


}

