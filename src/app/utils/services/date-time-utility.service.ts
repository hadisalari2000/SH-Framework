import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeUtilityService {

  constructor() { }

  public getCurrentDate(): Date {
    return new Date();
  }

  public getFullDateTime(date = this.getCurrentDate()): string {
    return date.getFullYear()
      + '-' + this.getValidValue(date.getMonth())
      + '-' + this.getValidValue(date.getDay())
      + ' - ' + this.getValidValue(date.getHours())
      + ':' + this.getValidValue(date.getMinutes())
      + ':' + this.getValidValue(date.getSeconds());
  }

  public getShortDate(date = this.getCurrentDate()): string {
    return date.getFullYear()
      + '-' + this.getValidValue(date.getMonth())
      + '-' + this.getValidValue(date.getDay());
  }

  public getShortTime(date = this.getCurrentDate()): string {
    return this.getValidValue(date.getHours())
      + ':' + this.getValidValue(date.getMinutes())
      + ':' + this.getValidValue(date.getSeconds());
  }

  private getValidValue(value: number): string {
    return value < 10
      ? '0' + value.toString()
      : value.toString();
  }
}
