import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getfeedbackDetails() : Observable<any> {
    return this.http.get('https://api.evspace.in/api/feedback/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  
}

