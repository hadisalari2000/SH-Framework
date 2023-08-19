import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { 
    this.url="http://localhost:8080/";
  }

  public url:string;

  public httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'aplication/json'
    })
  };
}
