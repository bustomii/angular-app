import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  appsSetting() {
    let url = "https://develop-14daypilot.astronacci.com/api/apps-settings";
    return this.http.get(url, this.httpOptions);
  }
}
