import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsService } from '../../infrastracture/services/settings.service';
import { LogManagerService } from './log-manager.service';
import { User } from '../models/user';
import { Observable, map } from 'rxjs';
import { HttpRequestResult } from '../models/http-request-result';
import { Utility } from '../../infrastracture/utilities/utility';
import { ApplicationProperties } from '../../infrastracture/utilities/applicationProperties';

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

    let requestUrl: string = ApplicationProperties.baseUrl + 'Account/Login';
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
    return this.http.post<HttpRequestResult<User>>(requestUrl, requestData, ApplicationProperties.httpOptions)
      .pipe(map(result => {
        Utility.log(result, this.logManagerService);
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
