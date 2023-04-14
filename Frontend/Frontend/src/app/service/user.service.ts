import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post('http://localhost:8080/api/user/addUser', user);
  }

  resetPassword(resetPasswordObj: any) {
    console.log(resetPasswordObj);
    return this.http.post('http://localhost:8080/api/user/resetPassword', resetPasswordObj);
  }
}