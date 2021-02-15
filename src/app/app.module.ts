import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule}  from '@angular/forms';
import {EmployeeService} from './shared/employee.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {DatePipe} from '@angular/common';
import {DepartmentService} from './shared/department.service';
import { EmployeeListComponent } from './main/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [

MaterialModule,
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)



  ],
  providers: [EmployeeService,DatePipe,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
