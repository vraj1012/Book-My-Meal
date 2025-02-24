import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Employee, SignUpEmployee } from '../Modal/Employee';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private employeeService : EmployeeServiceService,private route : Router,private _snackBar:MatSnackBar)
  {

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  loginShow()
  {
    this.route.navigate(['']);
  }

  signupForm = new FormGroup({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]),
    dateofbirth:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    deptid:new FormControl(0,[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  userSignUp()
  {
    console.log(this.signupForm.value);
  }


  get firstname()
  {
    return this.signupForm.get('firstname');
  }

  get lastname()
  {
    return this.signupForm.get('lastname');
  }

  get phonenumber()
  {
    return this.signupForm.get('phonenumber');
  }

  get dateofbirth()
  {
    return this.signupForm.get('dateofbirth');
  }

  get gender()
  {
    return this.signupForm.get('gender');
  }

  get deptid()
  {
    return this.signupForm.get('deptid');
  }

  get email()
  {
    return this.signupForm.get('email');
  }

  get password()
  {
    return this.signupForm.get('password');
  }

 
  signupFormSubmit(){
    
    var  formData= this.signupForm.value; 
    console.log(`Form Data : ${JSON.stringify(formData)}`)
    var firstname = formData['firstname'] as string;
    var lastname = formData['lastname'] as string;
    var phonenumber=formData['phonenumber'] as string;
    var dateofbirth=formData['dateofbirth'] as string;
    var gender = formData['gender'] as string;
    var deptid = Number(formData['deptid']);
    var email = formData['email'] as string;
    var password = formData['password'] as string;
    var employeeid = 0;
    var isactive = true;
    var isdeleted = false;
    var registrationdate ='';
    var modifiedon = '';

     this.employeeService.InsertEmpData({
                                        "EMPLOYEEID":employeeid,
                                        "FIRSTNAME":firstname,
                                        "LASTNAME":lastname,
                                        "PHONENUMBER":phonenumber, 
                                        "DOB":dateofbirth,
                                        "GENDER":gender,
                                        "DEPTID":deptid,
                                        "EMAIL":email,
                                        "PASSWORD":password,
                                        "ISACTIVE":isactive,
                                        "ISDELETED":isdeleted,
                                        "REGISTRATIONDATE":registrationdate,
                                        "MODIFIEDON":modifiedon
                                      }).subscribe((result) => {
     //console.log(result);
     if(result!=null){
       //alert("Registration Successful !")
       this.openSnackBar('Registration Successful !','Ok');
       this.route.navigate(['']);
     }
   
     },(error)=>{
       //alert("Registration Failed !")
       this.openSnackBar('Registration Failed !','Ok');
      // console.log(error);
       
     }
     
     );
     
   }



}
