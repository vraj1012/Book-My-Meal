import { Component } from '@angular/core';
import { Employee } from '../Modal/Employee';
import { EmployeeServiceService } from '../Services/employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  dataSource : any;
  employees: Employee[] = [];

  displayedColumns: string[] = ['EMPLOYEEID','FIRSTNAME','LASTNAME','GENDER','DOB','EMAIL','PHONENUMBER','DEPTID']

  constructor(private employeeService : EmployeeServiceService)
  {
  }

  ngOnInit() : void
  {
    //this.loadEmployees();
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.GetEmpData().subscribe(r => {
      console.log('DATA = ',r);
      this.dataSource = r;
    });
  }

  addEmployee(emp : Employee){
    this.employeeService.InsertEmpData(emp).subscribe(() => {
      this.getAllEmployees();
    });
  }

  updateEmployee(emp : Employee){
    this.employeeService.UpdateEmpData(emp).subscribe(() => {
      this.getAllEmployees();
    });
  }
  

  // loadEmployees() : void
  // {
  //   this.employeeService.GetEmpData().subscribe(res => {
  //     this.employees = res;
  //     this.dataSource = res;
  //   });
  // }

}
