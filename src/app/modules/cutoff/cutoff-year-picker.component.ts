import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../modules/employee/employee-service';
import Employee from '../../modules/employee/employee';

const YEARS: [string] = ['2013', '2014', '2015', '2016'];

@Component({
  selector: 'cutoff-year-picker',
  template: `<md-card>
    <h4>This is the cutoff year picker component</h4>
    <button
        md-button
        *ngFor="let year of years"
        (click)="gotoCutoffPicker(year)">
      {{year}}
    </button>
  </md-card>`
})
export class CutoffYearPickerComponent implements OnInit { 
  years: [string];
  employee: Employee;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.years = YEARS;

    this.route.params
      .switchMap((params: Params) => {
        return this.employeeService.findEmployee(+params['id']);
      })
      .subscribe(employee => this.employee = employee);
  }

  gotoCutoffPicker(year: String) {
    this.router.navigate([`/employees/${this.employee.id}/cutoffs`, year]);
  }
}
