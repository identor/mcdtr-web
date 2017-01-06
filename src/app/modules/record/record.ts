import * as moment from 'moment';

export default class Record {
  id: number;
  day: String;
  timeIn: Date;
  timeOut: Date;
  hoursRendered: number;
  ot: number;
  nsd: number;
  formattedTimeIn: string;
  formattedTimeOut: string;

  constructor(options) { 
    this.id = options.id;
    this.day = options.day;
    this.timeIn = options.timeIn;
    this.timeOut = options.timeOut;
    this.hoursRendered = options.hoursRendered;
    this.ot = options.ot;
    this.nsd = options.nsd;
    this.formatDates();
  }

  formatDates() {
    this.formattedTimeIn = moment(this.timeIn).format('h:mm a');
    this.formattedTimeOut = moment(this.timeOut).format('h:mm a');
  }
}
