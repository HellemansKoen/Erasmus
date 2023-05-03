import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  token: string ="";
  
  addUser(user: User) {
    return this.http.post('http://localhost:8080/api/user/addUser', user);
  }

// OK
  resetPassword(resetPasswordObj: any) {
    return this.http.put('http://localhost:8080/api/user/resetPassword', resetPasswordObj);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/user/getAllUsers');
  }

  // NOK
  login(username: string, password: string): Observable<any> {   
    return this.http.get<any>(`http://localhost:8080/api/auth/authenticate?username=${username}&password=${password}`);
  }
}
