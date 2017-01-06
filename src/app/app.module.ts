import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './modules/employee/employee-details.component';
import { EmployeeListComponent } from './modules/employee/employee-list.component';
import { RecordListComponent } from './modules/record/record-list.component';
import { CutoffYearPickerComponent } from './modules/cutoff/cutoff-year-picker.component';
import { CutoffPickerComponent } from './modules/cutoff/cutoff-picker.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { EmployeeService } from './modules/employee/employee-service';
import { CutoffService } from './modules/cutoff/cutoff-service';
import { RecordService } from './modules/record/record-service';

import { ROUTES } from './app-routes';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    RecordListComponent,
    CutoffPickerComponent,
    CutoffYearPickerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    EmployeeService,
    CutoffService,
    RecordService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
