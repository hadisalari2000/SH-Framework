import { HttpHeaders } from "@angular/common/http";

export class ApplicationProperties{

    public static baseUrl:string="http://localhost:8080/";

    public static httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'aplication/json'
        })
      };
}