import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import Employee from './employee';
import { DATA } from './employees-mock';

@Component({
  selector: 'employee-list',
  template: `
    <md-list>
      <md-list-item *ngFor="let employee of employees">
        <button md-button (click)="outputEmployee(employee)">
          {{employee.lastName}}, {{employee.firstName}}
        </button>
      </md-list-item>
    </md-list>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: [Employee];
  @Output() onEmployeeClicked = new EventEmitter<Employee>();

  ngOnInit() {
    this.employees = DATA;
  }

  outputEmployee(employee) {
    this.onEmployeeClicked.emit(employee);
  }
}
