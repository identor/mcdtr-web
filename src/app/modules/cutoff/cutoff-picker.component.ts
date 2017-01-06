import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeService } from '../../modules/employee/employee-service';
import { CutoffService } from './cutoff-service';
import Cutoff from './cutoff';
import Employee from '../../modules/employee/employee';

@Component({
  selector: 'cutoff-picker',
  template: `<md-card>
    <h4>This is the cutoff picker component</h4>
    <button
        md-button
        *ngFor="let cutoff of cutoffs"
        (click)="gotoCutoffRecords(cutoff.id)">
      {{cutoff.dateRange}}
    </button>
  </md-card>`
})
export class CutoffPickerComponent implements OnInit { 
  cutoffs: [Cutoff];
  employee: Employee;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private cutoffService: CutoffService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        return this.employeeService.findEmployee(+params['id'])
      })
      .subscribe(employee => this.employee = employee);

    this.cutoffService.findAll()
      .then(cutoffs => this.cutoffs = cutoffs);
  }

  gotoCutoffRecords(cutoffId) {
    this.router.navigate([`/employees/${this.employee.id}/records/${cutoffId}`]);
  }
}
