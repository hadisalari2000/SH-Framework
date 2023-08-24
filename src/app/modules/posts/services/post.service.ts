import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpRequestResult } from 'src/app/shared/models/http-request-result';
import { LogManagerService } from 'src/app/shared/services/log-manager.service';
import { Post } from '../models/post';
import { ApplicationProperties } from 'src/app/infrastracture/utilities/applicationProperties';
import { Utility } from 'src/app/infrastracture/utilities/utility';

const postModuleUrl: string = "/post/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private logManagerService: LogManagerService) {

  }

  public getAll(): Observable<HttpRequestResult<Post[]>> {

    let url = ApplicationProperties.baseUrl + postModuleUrl + "getAllPost";

    return this.httpClient.get<HttpRequestResult<Post[]>>(url, ApplicationProperties.httpOptions)
      .pipe(map(result => {

        Utility.log(result, this.logManagerService);
        return result;
        
      }));
  }

  public create(newPost: Post): Observable<HttpRequestResult<Post>> {

    let url = ApplicationProperties.baseUrl + postModuleUrl + "createPost";

    return this.httpClient.post<HttpRequestResult<Post>>(url, newPost, ApplicationProperties.httpOptions)
      .pipe(map(result => {

        Utility.log(result, this.logManagerService);
        return result;

      }));
  }

}
