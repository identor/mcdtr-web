import 'rxjs/add/operator/switchMap'; 

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import Employee from './employee';
import { DATA } from './employees-mock';

@Component({
  selector: 'employee-details',
  template: `
  <div *ngIf="employee">
    <md-card>
      {{employee.lastName}}, {{employee.firstName}}
    </md-card>
    <record-list></record-list>
    <a md-button (click)="gotoCutoffYearPicker()">More data...</a>
  </div>`
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    function findEmployee (employees, id) {
      return Promise.resolve(employees.find(employee => employee.id === id));
    }

    this.route.params
      .switchMap((params: Params) => findEmployee(DATA, Number(params['id'])))
      .subscribe(employee => this.employee = employee);

  }

  gotoCutoffYearPicker() {
    this.router.navigate([`/employees/${this.employee.id}/cutoff-year-picker`]);
  }
}
