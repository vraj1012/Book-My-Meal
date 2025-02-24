import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PlacebulkorderComponent } from './placebulkorder/placebulkorder.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { CoupondetailsComponent } from './coupondetails/coupondetails.component';
import { RedeemedcoupondetailsComponent } from './redeemedcoupondetails/redeemedcoupondetails.component';

const routes: Routes = [
  {path : 'app-home',component : HomeComponent},
  {path : 'app-about',component : AboutComponent},
  {path : 'app-termsandconditions', component : TermsandconditionsComponent},
  {path : 'app-privacypolicy', component : PrivacypolicyComponent},
  {path : '', component : LoginComponent},
  {path : 'app-signup', component : SignupComponent},
  {path : 'app-changepassword', component : ChangepasswordComponent},
  {path : 'app-placebulkorder', component : PlacebulkorderComponent},
  {path : 'app-nav-bar', component:NavBarComponent},
  {path : 'app-employee', component:EmployeeComponent},
  {path : 'app-orderhistory', component:OrderhistoryComponent},
  {path : 'app-coupondetails', component:CoupondetailsComponent},
  {path : 'app-redeemedcoupondetails', component:RedeemedcoupondetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
