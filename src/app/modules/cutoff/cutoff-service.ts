import { Injectable } from '@angular/core';

import Cutoff from './cutoff';

const MOCK_DATA: [Cutoff]  = [
  { id: 1, dateRange: 'Nov 11 - 25' },
  { id: 2, dateRange: 'Nov 26 - Dec 10' },
  { id: 3, dateRange: 'Dec 11 - 25' }
];

Injectable()
export class CutoffService {
  findAll() {
    return Promise.resolve(MOCK_DATA);
  }

  findCutoff(id) {
    return Promise.resolve(MOCK_DATA.find(cutoff => cutoff.id === id));
  }
}
