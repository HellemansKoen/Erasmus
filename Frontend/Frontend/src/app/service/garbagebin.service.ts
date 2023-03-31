import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

 constructor(private http: HttpClient) { }
 // constructor() { }

  getBin(): Observable<any>{
    return this.http.get('http://localhost:8080/api/garbageBin/temp');
  }
}
