import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  readById() : Observable<any>{
    console.log("machineId")
    console.log()
    return this.http.get('https://api.evspace.in/api/company',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  updateCompanyData(body: any) {
    console.log("stationId")
    console.log()
    return this.http.patch('https://api.evspace.in/api/company',body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  getCompanyDetails() : Observable<any> {
    return this.http.get('https://api.evspace.in/api/company',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
