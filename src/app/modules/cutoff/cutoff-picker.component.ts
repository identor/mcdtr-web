import { Component } from '@angular/core';

@Component({
  selector: 'cutoff-picker',
  template: `<md-card>
    <h4>This is the cutoff picker component</h4>
    <button md-button>Nov 11 - 25</button>
    <button md-button>Nov 26 - Dec 10</button>
    <button md-button>Dec 11 - 25</button>
  </md-card>`
})
export class CutoffPickerComponent { }
