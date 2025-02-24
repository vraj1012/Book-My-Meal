import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogoutdialogComponent } from '../logoutdialog/logoutdialog.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private route : Router,public dialog : MatDialog) { }

  //DEFINING MENU TYPE BEFORE LOGIN
  menuType : string = 'default';

  ngOnInit(): void 
  {
      //AFTER THE ROUTE CHANGES 
      this.route.events.subscribe((val:any)=>{
        if(val.url)
        {
          //console.warn(val.url);
         // THIS MEANS THAT IF THE USER IS LOGGED IN THEN A TOKEN IS GENERATED AND URL THAT INCLUDES HOME THEN FOLLOWING MENU WILL BE DISPLAYED
          if(localStorage.getItem('token'))
          {
           // console.warn('AFTER LOGIN');
            this.menuType='employeemenu'
          }
          else
          {
            //console.warn('BEFORE LOGIN');
            this.menuType='default';
          }
        }
      });


  }

  homeShow() { this.route.navigate(['/app-home'])};

  //METHOD TO DESTROY TOKEN FROM LOCAL STORAGE AND LOGOUT (REDIRECT TO LOGIN PAGE)
  logoutButton()
  {
    localStorage.clear();
    this.route.navigate(['']);
  }

  changePasswordButton()
  {
    this.route.navigate(['/app-changepassword']);
  }

  //METHOD TO OPEN LOGOUT DIALOG
  openlogoutDialog()
  {
    this.dialog.open(LogoutdialogComponent);
  }



}
