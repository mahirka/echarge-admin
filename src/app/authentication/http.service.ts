import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  register(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'register', 'requestBody': requestBody }, {
      headers: { "authTocken": localStorage.getItem('tocken'), "apiKey": environment.apiKey },

      observe: 'body',
    });
  }

  login(body: any) {
    return this._http.post('http://134.209.153.116/api/admin/login', body, {
      headers: { "x-access-token": environment.apiKey },
      observe: 'body'
    });
  }

  sendOtpToResetPassword(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'sendOtpToResetPassword', 'requestBody': requestBody }, {
      headers: { "apiKey": environment.apiKey },
      observe: 'body',
    });
  }

  verifyOtpToResetPassword(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'verifyOtpToResetPassword', 'requestBody': requestBody }, {
      headers: { "apiKey": environment.apiKey },
      observe: 'body',
    });
  }

  resetPassword(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'resetPassword', 'requestBody': requestBody }, {
      headers: { "apiKey": environment.apiKey },
      observe: 'body',
    });
  }

  uploadMedia(uploadData) {
    return this._http.post('https://api.listnsell.in/api/upload',
      uploadData, {
      headers: { "authTocken": localStorage.getItem('tocken'), "apiKey": environment.apiKey },

      observe: 'body',
    });
  }
  
  sendOtpToRegister(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'sendOtpToRegister', 'requestBody': requestBody }, {
      headers: { "apiKey": environment.apiKey },
      observe: 'body',
    });
  }

  verifyOtpToRegister(requestBody) {
    return this._http.post('https://api.listnsell.in/api/auth/admin', { 'requestType': 'verifyOtpToRegister', 'requestBody': requestBody }, {
      headers: { "apiKey": environment.apiKey },
      observe: 'body',
    });
  }


}
