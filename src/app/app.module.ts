import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './modules/employee/employee-details.component';
import { EmployeeListComponent } from './modules/employee/employee-list.component';
import { RecordListComponent } from './modules/record/record-list.component';
import { CutoffYearPickerComponent } from './modules/cutoff/cutoff-year-picker.component';
import { CutoffPickerComponent } from './modules/cutoff/cutoff-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    RecordListComponent,
    CutoffPickerComponent,
    CutoffYearPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
