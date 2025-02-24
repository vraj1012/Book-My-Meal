import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Employee } from '../Modal/Employee';
import { EmployeeServiceService } from '../Services/employee-service.service';
import {Route, Router} from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private employeeService : EmployeeServiceService,private route : Router,private _snackBar: MatSnackBar)
  {

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  // ROUTES TO NAVIGATE IN LOGIN FORM
  signupShow()
  {
    this.route.navigate(['/app-signup']);
  }

  changepasswordShow()
  {
    this.route.navigate(['/app-changepassword']);
  }

  // DEFINED FORM GROUP FOR LOGIN FORM
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  // LOGIN BUTTON METHOD
  loginFormSubmit(){
    
    var  formData= this.loginForm.value; 
    //console.log(`Form Data : ${JSON.stringify(formData)}`)

    var email = formData['email'] as string;
    var password = formData['password'] as string;

    this.employeeService.verifyLoginCredentials({
                                        "EMAIL":email,
                                        "PASSWORD":password
                                      }).subscribe((result) => {
     console.log(result);
     if(result!=null){

      var token = result;
      localStorage.setItem('token',token);

      //Retrieving token from local storage and decoding it
      let storageToken = localStorage.getItem('token');
      let decodedJWT = JSON.parse(window.atob(token.split('.')[1]));
      //console.log(`EMPLOYEE ID : ${decodedJWT.EMPLOYEEID}`)


      const EMPLOYEEID = decodedJWT.EMPLOYEEID;
      localStorage.setItem('EMPLOYEEID',EMPLOYEEID);
      //console.log(EMPLOYEEID);

      //console.log(`Token : ${result}`);
      // alert("Login Successful");
      this.openSnackBar('Login Successful','Ok');
       this.route.navigate(['/app-home']);
     }
   
     },(error)=>{
       //alert("Login Failed!");
       this.openSnackBar('Login Failed','Ok');
       console.log(error);
       
     }
     
     );
     
   }

}
