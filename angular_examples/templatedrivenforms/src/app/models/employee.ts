import {b} from '@angular/core/src/render3';

export class Employee {
  constructor(
    public firstname: string,
    public lastname: string,
    public isFullTime: boolean,
    public paymentType: string,
    public primaryLanguage: string
  ) {
  }
}
