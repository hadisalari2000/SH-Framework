import { Injectable } from '@angular/core';
import { DateTimeUtilityService } from '../utils/services/date-time-utility.service';

@Injectable({
  providedIn: 'root'
})
export class LogManagerService {

  private debugMessages: string[] = [];
  private informationMessages: string[] = [];
  private warningMessages: string[] = [];
  private errorMessages: string[] = [];

  constructor(private dateTimeUtilityService: DateTimeUtilityService) {
    this.reset();
  }

  private reset() {
    this.debugMessages = [];
    this.informationMessages = [];
    this.warningMessages = [];
    this.errorMessages = [];
  }

  private getValidMessage(message: string): string {

    if (message === undefined)
      return '';

    if (message == null)
      return '';

    return message.trim();
  }

  public logHidden(message: string): void {
    message = this.getValidMessage(message);
    if (message === '')
      return;

    console.log(message);
  }

  public logDebug(message: string): void {
    message = this.getValidMessage(message);
    if (message === '')
      return;

    message = '[ ' + this.dateTimeUtilityService.getFullDateTime() + ' ] ' + ' -- ' + message;
    this.debugMessages.push(message)
  }

  public logInformation(message: string): void {
    message = this.getValidMessage(message);
    if (message === '')
      return;

    message = '[ ' + this.dateTimeUtilityService.getFullDateTime() + ' ] ' + ' -- ' + message;
    this.informationMessages.push(message)
  }

  public logWarning(message: string): void {
    message = this.getValidMessage(message);
    if (message === '')
      return;

    message = '[ ' + this.dateTimeUtilityService.getFullDateTime() + ' ] ' + ' -- ' + message;
    this.warningMessages.push(message)
  }

  public logError(message: string): void {
    message = this.getValidMessage(message);
    if (message === '')
      return;

    message = '[ ' + this.dateTimeUtilityService.getFullDateTime() + ' ] ' + ' -- ' + message;
    this.errorMessages.push(message)
  }

  public clearDebugMessages():void{
    this.debugMessages=[];
  }

  public clearInformationMessages():void{
    this.informationMessages=[];
  }

  public clearWarningMessages():void{
    this.warningMessages=[];
  }

  public clearErrorMessages():void{
    this.errorMessages=[];
  }

  public clearAllMessages():void{
    this.reset();
  }

  public getDebugMessages():string[]{
    return this.debugMessages;
  }

  public getInformationMessages():string[]{
    return this.informationMessages;
  }

  public getWarningMessages():string[]{
    return this.warningMessages;
  }

  public getErrorMessages():string[]{
    return this.errorMessages;
  }
}