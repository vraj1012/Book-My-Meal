import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrialComponent } from './trial/trial.component';
import { Trial2Component } from './trial2/trial2.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpsertComponent } from './upsert/upsert.component';

import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//fullcalendar
import { FullCalendarModule } from '@fullcalendar/angular';

//Countdown Module


// components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PlacebulkorderComponent } from './placebulkorder/placebulkorder.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { CoupondetailsComponent } from './coupondetails/coupondetails.component';
import { RedeemdialogComponent } from './redeemdialog/redeemdialog.component';
import { RedeemedcoupondetailsComponent } from './redeemedcoupondetails/redeemedcoupondetails.component';
import { PlacequickmealdialogComponent } from './placequickmealdialog/placequickmealdialog.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LogoutdialogComponent } from './logoutdialog/logoutdialog.component';
import { CancelorderdialogComponent } from './cancelorderdialog/cancelorderdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    TrialComponent,
    Trial2Component,
    EmployeeComponent,
    UpsertComponent,
    SignupComponent,
    LoginComponent,
    ChangepasswordComponent,
    PlacebulkorderComponent,
    OrderhistoryComponent,
    CoupondetailsComponent,
    RedeemdialogComponent,
    RedeemedcoupondetailsComponent,
    PlacequickmealdialogComponent,
    CountdownComponent,
    LogoutdialogComponent,
    CancelorderdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
