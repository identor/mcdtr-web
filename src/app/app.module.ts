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

const ROUTES: Routes = [
  {
    path: 'employees/cutoffs/year-picker',
    component: CutoffYearPickerComponent
  },
  {
    path: 'employees/cutoffs',
    component: CutoffPickerComponent
  },
  {
    path: 'employees/records/:id',
    component: RecordListComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**', component: DashboardComponent
  }
]

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
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
