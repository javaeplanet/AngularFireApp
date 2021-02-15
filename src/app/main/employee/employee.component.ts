import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../shared/employee.service';

import { DepartmentService } from './../../shared/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  // departments=[
  //   {id:1,name:"angular"},
  //   {id:2,name:"react"},
  //   {id:3,name:"java"},
  //   {id:4,name:"mongo db"}
  // ]
  constructor(public empService:EmployeeService,
    public deptService:DepartmentService ) { }

  ngOnInit() {
    this.empService.getEmployees();
  }

  onClick(){
    this.empService.form.reset();
    this.empService.initializeFormGroup();
 
  }

onSubmit(){
  if(this.empService.form.valid){
    this.empService.insertEmployee(this.empService.form.value);
this.empService.form.reset()
this.empService.initializeFormGroup()

    }
  }
}

