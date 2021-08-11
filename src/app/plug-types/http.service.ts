import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getplugTypeDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/vehicle/plug_type',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  
}