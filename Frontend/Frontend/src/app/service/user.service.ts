import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    console.log(user);
    return this.http.post('http://localhost:8080/api/user/addUser', user);
  }

  resetPassword(resetPasswordObj: any) {
    return this.http.put('http://localhost:8080/api/user/resetPassword', resetPasswordObj);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/user/getAllUsers');
  }
}