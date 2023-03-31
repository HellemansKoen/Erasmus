import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GarbageBin } from '../models/Garbagebin';
import { KindBin } from '../models/KindBin';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

  constructor(private http: HttpClient) { }

  getBin(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/garbageBin/temp');
  }
  addBin(bin : GarbageBin){
    return this.http.put('http://localhost:8080/api/garbageBin/addBin',{bin}).subscribe();
  }
}
