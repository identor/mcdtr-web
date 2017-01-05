import { Component, Input } from '@angular/core';

import Employee from './employee';

@Component({
  selector: 'employee-details',
  template: `<md-card>
    {{employee.lastName}}, {{employee.firstName}}
  </md-card>`
})
export class EmployeeDetailsComponent {
  @Input() employee: Employee;
}
