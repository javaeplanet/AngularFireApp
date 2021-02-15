import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../shared/employee.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
listData: MatTableDataSource<any>;
displayedColumns: string[]=['fullName','email','mobile','city','department','hireDate','gender','actions']
  constructor(public empService:EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(list=>{
      let array=list.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        }
      })
      this.listData=new MatTableDataSource(array)
    })

    
  }
  onDelete($key){
    if(confirm('Are you sure to delete this record')){
      this.empService.deleteEmployee($key)
    }
  }

}
