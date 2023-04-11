import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GarbageBin } from '../models/Garbagebin';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

  constructor(private http: HttpClient) { }

  public getBin(): Observable<GarbageBin[]> {
    return this.http.get<GarbageBin[]>('http://localhost:8080/api/garbageBin/temp');
  }

  public getAllBin(): Observable<GarbageBin[]> {
    return this.http.get<GarbageBin[]>('http://localhost:8080/api/garbageBin/getAllBins');
  }

  addBin(bin: GarbageBin) {
    return this.http.post('http://localhost:8080/api/garbageBin/addBin', { bin });
  }
}
