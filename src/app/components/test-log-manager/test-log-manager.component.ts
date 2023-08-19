import { Component } from '@angular/core';
import { LogManagerService } from 'src/app/services/log-manager.service';

@Component({
  selector: 'app-test-log-manager',
  templateUrl: './test-log-manager.component.html',
  styleUrls: ['./test-log-manager.component.css']
})
export class TestLogManagerComponent {

  public debugMessage: string;
  public informationMessage: string;
  public warningMessage: string;
  public errorMessage: string;
  public hiddenMessage: string;

  constructor(private logManagerService: LogManagerService) {
    this.debugMessage = '';
    this.informationMessage = '';
    this.warningMessage = '';
    this.errorMessage = '';
    this.hiddenMessage = '';
  }

  public logDebug(){
    this.logManagerService.logDebug(this.debugMessage);
  }

  public logInformation(){
    this.logManagerService.logInformation(this.informationMessage);
  }
  
  public logWarning(){
    this.logManagerService.logWarning(this.warningMessage);
  }
  
  public logError(){
    this.logManagerService.logError(this.errorMessage);
  }
  
  public logHidden(){
    this.logManagerService.logHidden(this.hiddenMessage);
  }

}
