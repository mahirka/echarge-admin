import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getchargingStation() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/charging_station/by_admin',  {
      headers: {"x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readById(stationId) : Observable<any>{
    console.log("stationId")
    console.log(stationId)
    return this.http.get('http://134.209.153.116/api/charging_station/'+stationId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createStation(body: any) {
    return this.http.post('http://134.209.153.116/api/charging_station', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateStation(stationId) {
    console.log("stationId")
    console.log(stationId)
    return this.http.patch('http://134.209.153.116/api/charging_station/'+stationId, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
}
