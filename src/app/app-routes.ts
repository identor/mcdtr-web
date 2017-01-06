import { Routes } from '@angular/router';

import { EmployeeDetailsComponent } from './modules/employee/employee-details.component';
import { RecordListComponent } from './modules/record/record-list.component';
import { CutoffYearPickerComponent } from './modules/cutoff/cutoff-year-picker.component';
import { CutoffPickerComponent } from './modules/cutoff/cutoff-picker.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const ROUTES: Routes = [
  {
    path: 'employees/:id/cutoff-year-picker',
    component: CutoffYearPickerComponent
  },
  {
    path: 'employees/:id/cutoffs/:year',
    component: CutoffPickerComponent
  },
  {
    path: 'employees/:id/records/:cutoffId',
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
