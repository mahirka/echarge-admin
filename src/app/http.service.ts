import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  updateSitemap() {
    return this.http.post('https://api.listnsell.in/api/sitemap', { 'requestType': 'updateSitemap'}, {
      observe: 'body',
    });
  }
  createEnquiry(newEnquiryBody) : Observable<any> {
    return this.http.post('https://api.listnsell.in/api/enquiry',{requestType:'createEnquiry',requestBody:newEnquiryBody},{
     
      observe:'body'
    })
  };
  createAutomobileList(requestBody) : Observable<any> {
    return this.http.post('https://api.listnsell.in/api/auth/user', { requestType: 'createAutomobileList', 'requestBody': requestBody }, {
     
      observe: 'body',
    });
  }
  createFashionList(requestBody) : Observable<any> {
    return this.http.post('https://api.listnsell.in/api/auth/user', {requestType: 'createFashionList', 'requestBody': requestBody }, {
     
      observe: 'body',
    });
  }
  createJobList(requestBody) : Observable<any> {
    return this.http.post('https://api.listnsell.in/api/auth/user', { requestType: 'createJobList', 'requestBody': requestBody }, {
     
      observe: 'body',
    });
  }
  createRealEstateList(requestBody) : Observable<any> {
    return this.http.post('https://api.listnsell.in/api/auth/user', { requestType: 'createRealEstateList', 'requestBody': requestBody }, {
     
      observe: 'body',
    });
  }
  //VNSqk8pW8lJrkHBG
  getLoggedInAdminDetails() {
    return this.http.post('https://api.listnsell.in/api/adminDashboard',{requestType:'getLoggedInAdminDetails'}, {
     
      observe: 'body',
    });
  }
  

}

