import { Injectable } from '@angular/core';

import Record from './record';

function generateRecord(mockData): [Record] {
  return mockData.map(data => new Record(data));
}

const DATA: [Record] = generateRecord([
  {
    id: 1,
    day: 'Jan 6',
    timeIn: new Date('2017-01-06T00:44:22.367Z'),
    timeOut: new Date('2017-01-06T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  },
  {
    id: 2,
    day: 'Jan 7',
    timeIn: new Date('2017-01-07T00:44:22.367Z'),
    timeOut: new Date('2017-01-07T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  },
  {
    id: 3,
    day: 'Jan 8',
    timeIn: new Date('2017-01-08T00:44:22.367Z'),
    timeOut: new Date('2017-01-08T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  },
  {
    id: 4,
    day: 'Jan 9',
    timeIn: new Date('2017-01-09T00:44:22.367Z'),
    timeOut: new Date('2017-01-09T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  },
  {
    id: 5,
    day: 'Jan 10',
    timeIn: new Date('2017-01-10T00:44:22.367Z'),
    timeOut: new Date('2017-01-10T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  },
  {
    id: 6,
    day: 'Jan 11',
    timeIn: new Date('2017-01-11T00:44:22.367Z'),
    timeOut: new Date('2017-01-11T09:44:22.367Z'),
    hoursRendered: 8,
    ot: 0,
    nsd: 0
  }
]);

@Injectable()
export class RecordService {
  findAll(): Promise<[Record]> {
    return Promise.resolve(DATA);
  }
}
