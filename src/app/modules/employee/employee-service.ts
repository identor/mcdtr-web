import { Injectable } from '@angular/core';

import { DATA } from './employees-mock';
import Employee from './employee';

@Injectable()
export class EmployeeService {
  findEmployee(id) {
    return Promise.resolve(DATA.find(employee => employee.id === id));
  }
}
