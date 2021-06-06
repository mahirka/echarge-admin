import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getordersDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/order/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readById(orderId) : Observable<any>{
    console.log("orderId")
    console.log(orderId)
    return this.http.get('http://134.209.153.116/api/order/'+orderId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
