import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id : number
  employee : Employee = new Employee();
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error =>console.log(error))
    
  }

  onSubmit(){
   this.router.navigate(['/employees']);
  }

}
