import { Component } from '@angular/core';

import Employee from './modules/employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  employee: Employee;

  displayEmployee(employee: Employee) {
    this.employee = employee;
  }
}
