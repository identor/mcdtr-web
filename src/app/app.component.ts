import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Employee from './modules/employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  employee: Employee;

  constructor (
    private router: Router,
  ) { }

  displayEmployee(employee: Employee) {
    this.employee = employee;
    this.router.navigate(['/employees', employee.id]);
  }
}
