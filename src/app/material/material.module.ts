import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule}  from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

const materialComponents=[
  MatToolbarModule,
  MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatRadioModule,
MatSelectModule,
MatNativeDateModule,
MatDatepickerModule,
MatCheckboxModule,
MatButtonModule,
MatTableModule,
MatProgressSpinnerModule,
MatIconModule


]

@NgModule({

  imports: [materialComponents ],
  exports:[materialComponents]
})
export class MaterialModule { }
