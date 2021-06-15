import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getvendorsProfile() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/users',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readById(userId) : Observable<any>{
    console.log("userId")
    console.log(userId)
    return this.http.get('http://134.209.153.116/api/users/'+userId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
