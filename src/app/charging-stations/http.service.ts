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
    return this.http.get('https://api.evspace.in/api/charging_station/by_admin',  {
      headers: {"x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readById(stationId) : Observable<any>{
    console.log("stationId")
    console.log(stationId)
    return this.http.get('https://api.evspace.in/api/charging_station/'+stationId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createStation(body: any) {
    return this.http.post('https://api.evspace.in/api/charging_station', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateStation(stationId,body: any) {
    console.log("stationId")
    console.log(stationId)
    return this.http.patch('https://api.evspace.in/api/charging_station/'+stationId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  deleteStation(stationId) : Observable<any>{
    console.log("stationId")
    console.log(stationId)
    return this.http.delete('https://api.evspace.in/api/charging_station/'+stationId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
}
