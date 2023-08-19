import { Component } from '@angular/core';
import { LogManagerService } from 'src/app/services/log-manager.service';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent {

  public debugMessages?: string[];
  public informationMessages?: string[];
  public warningMessages?: string[];
  public errorMessages?: string[];

  constructor(private logManagerService: LogManagerService) {
    this.getDebugMessages();
    this.getInformationMessages();
    this.getWarningMessages();
    this.getErrorMessages();

    console.log(this.errorMessages);
  }

  public getDebugMessages():void{
    this.debugMessages=this.logManagerService.getDebugMessages();
  }

  public getInformationMessages():void{
    this.informationMessages=this.logManagerService.getInformationMessages();
  }

  public getWarningMessages():void{
    this.warningMessages=this.logManagerService.getWarningMessages();
  }

  public getErrorMessages():void{
    this.errorMessages=this.logManagerService.getErrorMessages();
  }
  

  public clearDebugMessages(){
    this.logManagerService.clearDebugMessages();
    this.debugMessages=[];
  }

  public clearInformationMessages(){
    this.logManagerService.clearInformationMessages();
    this.informationMessages=[];
  }

  public clearWarningMessages(){
    this.logManagerService.clearWarningMessages();
    this.warningMessages=[];
  }

  public clearErrorMessages(){
    this.logManagerService.clearErrorMessages();
    this.errorMessages=[];
  }

  public clearAll(){
    this.clearDebugMessages();
    this.clearInformationMessages();
    this.clearWarningMessages();
    this.clearErrorMessages();
  }

}
