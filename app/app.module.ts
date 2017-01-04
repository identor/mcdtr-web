import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CutoffComponent }  from './imports/cutoff/cutoff.component';
import { EmployeeComponent }  from './imports/employee/employee.component';
import { RecordComponent }  from './imports/record/record.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CutoffComponent,
    EmployeeComponent,
    RecordComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
