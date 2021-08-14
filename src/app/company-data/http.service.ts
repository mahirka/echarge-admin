import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  readById(machineId) : Observable<any>{
    console.log("machineId")
    console.log(machineId)
    return this.http.get('https://api.evspace.in/api/charging_machine/'+machineId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  updateCompanyData(machineId,body: any) {
    console.log("stationId")
    console.log(machineId)
    return this.http.patch('https://api.evspace.in/api/charging_machine/'+machineId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
}
