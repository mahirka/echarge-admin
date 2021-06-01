import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getchargingMechine() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/charging_machine/by_admin', {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
