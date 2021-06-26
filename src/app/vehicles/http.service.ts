import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getvehicleDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/vehicle/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  getVehicleMakeDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/vehicle_make/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  getVehicleModelDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/vehicle_model/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readById(makeId) : Observable<any>{
    console.log("makeId")
    console.log(makeId)
    return this.http.get('http://134.209.153.116/api/vehicle_make/'+makeId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readByModelId(modelId) : Observable<any>{
    console.log("modelId")
    console.log(modelId)
    return this.http.get('http://134.209.153.116/api/vehicle_make/'+modelId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  readByMarketVehicleId(marketVehicleId) : Observable<any>{
    console.log("modelId")
    console.log(marketVehicleId)
    return this.http.get('http://134.209.153.116/api/market_vehicle/'+marketVehicleId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createBrand(body: any) {
    return this.http.post('http://134.209.153.116/api/vehicle_make', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateMake(makeId,body: any) {
    console.log("makeId")
    console.log(makeId)
    return this.http.patch('http://134.209.153.116/api/vehicle_make/'+makeId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  deleteMake(makeId) : Observable<any>{
    console.log("makeId")
    console.log(makeId)
    return this.http.delete('http://134.209.153.116/api/vehicle_make/'+makeId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createModel(body: any) {
    return this.http.post('http://134.209.153.116/api/vehicle_model', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateModel(modelId,body: any) {
    console.log("modelId")
    console.log(modelId)
    return this.http.patch('http://134.209.153.116/api/vehicle_model/'+modelId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  deleteModel(modelId) : Observable<any>{
    console.log("modelId")
    console.log(modelId)
    return this.http.delete('http://134.209.153.116/api/vehicle_model/'+modelId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  getmarketVehicleDetails() : Observable<any> {
    return this.http.get('http://134.209.153.116/api/market_vehicle/by_admin',  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }
  createMarketVehicle(body: any) {
    return this.http.post('http://134.209.153.116/api/market_vehicle', body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  updateMarketVehicle(marketVehicleId,body: any) {
    console.log("marketVehicleId")
    console.log(marketVehicleId)
    return this.http.patch('http://134.209.153.116/api/market_vehicle/'+marketVehicleId,body, {
      headers: { "x-access-token": localStorage.getItem('token')  },
      observe: 'body'
    });
  }
  deleteMarketVehicle(marketVehicleId) : Observable<any>{
    console.log("marketVehicleId")
    console.log(marketVehicleId)
    return this.http.delete('http://134.209.153.116/api/market_vehicle/'+marketVehicleId,  {
      headers: { "x-access-token": localStorage.getItem('token') },
      observe: 'body',
    });
  }

}
