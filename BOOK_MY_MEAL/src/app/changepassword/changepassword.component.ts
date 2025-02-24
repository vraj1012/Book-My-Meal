import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  constructor(private employeeService : EmployeeServiceService,private route : Router,private _snackBar : MatSnackBar) { }

  // ROUTES TO NAVIGATE IN CHANGE PASSWORD FORM
  loginShow()
  {
    this.route.navigate(['']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  changepasswordForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    newpassword:new FormControl('',[Validators.required]),
    confirmnewpassword: new FormControl('',[Validators.required])
  })

  get email()
  {
    return this.changepasswordForm.get('email');
  }

  get password()
  {
    return this.changepasswordForm.get('password');
  }

  get newpassword()
  {
    return this.changepasswordForm.get('newpassword');
  }

  get confirmnewpassword()
  {
    return this.changepasswordForm.get('confirmnewpassword');
  }

  changepasswordFormSubmit(){
    
    var  formData= this.changepasswordForm.value; 
    //console.log(`Form Data : ${JSON.stringify(formData)}`)

    var email = formData['email'] as string;
    var password = formData['password'] as string;
    var newpassword = formData['newpassword'] as string;
    var confirmnewpassword = formData['confirmnewpassword'] as string;
    var employeeid = 0;
    var firstname = '';
    var lastname = '';
    var phonenumber = '';
    var dateofbirth = '';
    var gender = '';
    var deptid = 0;
    var isactive = true;
    var isdeleted = false;
    var registrationdate ='';
    var modifiedon = '';
    if(newpassword === confirmnewpassword)
    {
     this.employeeService.changeEmpPassword({
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
                                      },newpassword).subscribe((result) => {
     //console.log(result);
     if(result!=null){
       //alert("Password Updated!");
       this.openSnackBar('Password Updated!','Ok');
       this.route.navigate(['']);
       this.changepasswordForm.reset;
     }
   
     },(error)=>{
       //alert("Could not update your password !");
       this.openSnackBar('Could not update your password !','Ok');
       //console.log(error);
       
     }
     
     );
    }
    else
    {
      //alert('New Password and Confirm Password does not match!');
      this.openSnackBar('New Password and Confirm Password does not match!','Ok');
    }
     
   }

}
