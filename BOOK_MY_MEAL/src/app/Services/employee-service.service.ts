import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, SignUpEmployee } from '../Modal/Employee';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../Modal/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private apiUrl = "https://localhost:7085";

  constructor(private http: HttpClient) { }

  GetEmpData() 
  {
    return this.http.get(`${this.apiUrl}/api/Employee`);
  }

  GetEmpDataByEmployeeId(employeeID : number) 
  {
    return this.http.get(`${this.apiUrl}/api/Employee/${employeeID}`);
  }

  InsertEmpData(emp : Employee) 
  {
    return this.http.post(`${this.apiUrl}/api/Employee`,emp);
  }

  UpdateEmpData(emp : Employee) 
  {
    return this.http.put(`${this.apiUrl}/api/Employee/${emp.EMPLOYEEID}`,emp);
  }

  DeleteEmpData(employeeID:number)
  {
    return this.http.delete(`${this.apiUrl}/api/Employee/${employeeID}`);
  }  

  changeEmpPassword(emp : Employee,newpassword : string)
  {
    return this.http.put(`${this.apiUrl}/api/Employee/${newpassword}`,emp);
  }

  verifyLoginCredentials(credentials : LoginCredentials) 
  {
    return this.http.post(`${this.apiUrl}/api/LoginCredentials`,credentials,{responseType: 'text'});
  }
  

}
