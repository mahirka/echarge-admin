import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  canActivateRoute(requestedRoute) {
    return this._http.post('http://3.143.68.138/api/check/token', { "token":localStorage.getItem ('tocken') }, {
      headers:{"authTocken":localStorage.getItem('tocken'),"apiKey":environment.apiKey},
      observe: 'body',
    });
  }
}
