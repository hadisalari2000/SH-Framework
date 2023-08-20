import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { LogManagerService } from './log-manager.service';
import { User } from '../models/user';
import { Observable,map } from 'rxjs';
import { HttpRequestResult } from '../models/http-request-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private settingService: SettingsService,
    private logManagerService: LogManagerService) {

    this.currentUser = null;
  }

  public login(username: string, password: string): Observable<HttpRequestResult<User>> {

    let requestUrl: string = this.settingService.url + 'Account/Login';
    let requestData = { 'username': username, 'password': password };

    /* 1 */
    /* return this.http.get<HttpRequestResult<User>>(requestUrl).pipe(); */


    /* 2 */
    /* return this.http.get<HttpRequestResult<User>>(requestUrl)
      .pipe(map(result => {
        //log Errors and ...
        this.currentUser = result.data;
        return result;
      })); */


    /* 3 */
    return this.http.post<HttpRequestResult<User>>(requestUrl, requestData, this.settingService.httpOptions)
      .pipe(map(result => {
        
        for(let index:number=0;index<result.errorMessages.length;index++){
          this.logManagerService.logError(result.errorMessages[index]);
        }
        for(let index:number=0;index<result.informationMessages.length;index++){
          this.logManagerService.logInformation(result.informationMessages[index]);
        }
        for(let index:number=0;index<result.hiddenMessages.length;index++){
          this.logManagerService.logHidden(result.hiddenMessages[index]);
        }
        this.currentUser = result.data;
        return result;
      }));


    /* 4 */
    /* return this.http.post<any>(requestUrl,requestData,this.settingService.httpOptions)
    .pipe(map(result=>{
      //log Errors and ...
      this.currentUser = result.data;
      return result;
    })); */


    /* 6 */
    /* return this.http.post<any>('',{'username':username,'password':password})
    .pipe(map(result=>{
      //log Errors and ...
      this.currentUser = result.data;
      return result;
    })); */

  }

  public logout(): void {
    this.currentUser = null;
  }

  public currentUser?: User | null;
}
