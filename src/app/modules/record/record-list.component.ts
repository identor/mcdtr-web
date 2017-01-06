import { Component, OnInit } from '@angular/core';

import Record from './record';
import { RecordService } from './record-service';

@Component({
  selector: 'record-list',
  template: `<md-card>
    <h4>This is the record list component</h4>
    <table>
      <tr>
        <th>Day</th>
        <th>Time In</th>
        <th>Time Out</th>
        <th>Hours Rendered</th>
        <th>OT</th>
        <th>NSD</th>
      </tr>
      <tr *ngFor="let record of records">
        <td>{{record.day}}</td>
        <td>{{record.formattedTimeIn}}</td>
        <td>{{record.formattedTimeOut}}</td>
        <td>{{record.hoursRendered}}</td>
        <td>{{record.ot}}</td>
        <td>{{record.nsd}}</td>
      </tr>
    </table>
  </md-card>`
})
export class RecordListComponent implements OnInit {
  records: [Record];

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.recordService
      .findAll()
      .then(records => this.records = records);
  }
}
