import { Component } from '@angular/core';

@Component({
  selector: 'cutoff-year-picker',
  template: `<md-card>
    <h4>This is the cutoff year picker component</h4>
    <button md-button>2016</button>
    <button md-button>2015</button>
    <button md-button>2014</button>
  </md-card>`
})
export class CutoffYearPickerComponent { }
