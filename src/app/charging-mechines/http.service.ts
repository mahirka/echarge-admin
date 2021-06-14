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
  readById(machineId) : Observable<any>{
    console.log("machineId")
    console.log(machineId)
    return this.http.get('http://134.209.153.116/api/charging_machine/'+machineId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  historyById(machineId) : Observable<any>{
    console.log("machineId")
    console.log(machineId)
    return this.http.get('http://134.209.153.116/api/charging_machine/charging_history/'+machineId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  dataById(machineId) : Observable<any>{
    console.log("machineId")
    console.log(machineId)
    return this.http.get('http://134.209.153.116/api/charging_machine/charging_data/'+machineId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createMachine(body: any) {
    return this.http.post('http://134.209.153.116/api/charging_machine', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateMachine(machineId,body: any) {
    console.log("stationId")
    console.log(machineId)
    return this.http.patch('http://134.209.153.116/api/charging_machine/'+machineId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  deleteMachine(machineId) : Observable<any>{
    console.log("stationId")
    console.log(machineId)
    return this.http.delete('http://134.209.153.116/api/charging_machine/'+machineId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
