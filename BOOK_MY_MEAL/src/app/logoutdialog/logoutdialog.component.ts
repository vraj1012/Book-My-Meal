import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutdialog',
  templateUrl: './logoutdialog.component.html',
  styleUrls: ['./logoutdialog.component.css']
})
export class LogoutdialogComponent {

  constructor(private dialogRef : MatDialog,private route : Router ) { }

    //METHOD TO DESTROY TOKEN FROM LOCAL STORAGE AND LOGOUT (REDIRECT TO LOGIN PAGE)
    logoutButton()
    {
      localStorage.clear();
      this.dialogRef.closeAll();
      this.route.navigate(['']);
    }

}
