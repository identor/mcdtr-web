import { Component } from '@angular/core';

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
      <tr>
        <td>Nov 3</td>
        <td>8:00 am</td>
        <td>6:00 pm</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Nov 4</td>
        <td>8:00 am</td>
        <td>6:00 pm</td>
        <td>9</td>
        <td>1</td>
        <td>0</td>
      </tr>
    </table>
  </md-card>`
})
export class RecordListComponent { }
