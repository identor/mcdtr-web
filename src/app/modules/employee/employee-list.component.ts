import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import Employee from './employee';

@Component({
  selector: 'employee-list',
  template: `
    <md-list>
      <md-list-item *ngFor="let employee of employees">
        <button md-button (click)="outputEmployee(employee)">{{employee.lastName}}, {{employee.firstName}}</button>
      </md-list-item>
    </md-list>
  `
})
export class EmployeeListComponent implements OnInit {
  employees: [Employee];
  @Output() onEmployeeClicked = new EventEmitter<Employee>();

  ngOnInit() {
    this.employees = [
      { id: 1, firstName: 'Juan', lastName: 'Cruz', middleName: 'Dela' },
      { id: 2, firstName: 'San', lastName: 'June', middleName: 'Tres' },
      { id: 3, firstName: 'John', lastName: 'Dog', middleName: 'Uno' },
      { id: 4, firstName: 'Isa', lastName: 'Cat', middleName: 'Dos' },
      { id: 5, firstName: 'Pina', lastName: 'Frutti', middleName: 'Dulo' },
      { id: 6, firstName: 'Hundred', lastName: 'Tutti', middleName: 'War' }
    ];
  }

  outputEmployee(employee) {
    this.onEmployeeClicked.emit(employee);
    console.log('Hello');
  }
}
