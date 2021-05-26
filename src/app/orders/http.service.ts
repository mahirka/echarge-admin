import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getordersDetails() : Observable<any> {
    return this.http.post('https://api.ecom.in/api/users', { requestType: 'readAll'   }, {
     
      observe: 'body',
    });
  }
}
