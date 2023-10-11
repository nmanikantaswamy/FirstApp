import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService, private router: Router){

  }
  ngOnInit(): void {
    
  }
  
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data +"inserted successfully");
      this.goToEmployeeList();

    },error=>console.log(error));
  }

  goToEmployeeList()
  {
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    this.saveEmployee();
  }

}
