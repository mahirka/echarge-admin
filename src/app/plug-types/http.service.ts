import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getplugTypeDetails() : Observable<any> {
    return this.http.get('https://api.evspace.in/api/vehicle/plug_type',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  
}