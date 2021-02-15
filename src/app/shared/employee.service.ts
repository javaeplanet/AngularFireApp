import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: AngularFireList<any>;
  constructor(public firebase: AngularFireDatabase, public datePipe: DatePipe
   ) { }
  form: FormGroup=new FormGroup({
    $key:new FormControl(null),
  fullName: new FormControl('',Validators.required),
  email  :new FormControl('',Validators.email),
  mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
  city:new FormControl(''),
  gender:new FormControl('1'),
  department:new FormControl(0),
  hireDate:new FormControl(''),
  isPermanent:new FormControl(false)
  })

  initializeFormGroup(){
    this.form.setValue(
      {
        $key:null,
        fullName: '',
        email:'',
        mobile:'',
        city:'',
        gender:'1',
        department:0,
        isPermanent:false
      }
    )
  }

  getEmployees(){
    this.employeeList=this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(emp){
    this.employeeList.push({
      fullName:emp.fullName,
      email:emp.email,
      mobile:emp.mobile,
      city:emp.city,
      gender:emp.gender,
      department:emp.department,
      hireDate:emp.hireDate == "" ? "": 
      this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
      isPermanent:emp.isPermanent
    })
  }
    updateEmployee(emp){
      this.employeeList.update(emp.$key,{
        fullName:emp.fullName,
        email:emp.email,
        mobile:emp.mobile,
        city:emp.city,
        gender:emp.gender,
        department:emp.department,
        hireDate:emp.hireDate == "" ? "": 
        this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
        isPermanent:emp.isPermanent
      })
    }
    deleteEmployee($key: string){
      this.employeeList.remove($key);
    }
  }
