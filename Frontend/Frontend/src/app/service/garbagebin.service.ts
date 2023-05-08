import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GarbageBin } from '../models/GarbageBin';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

  constructor(private http: HttpClient) { }
/*
  public getBin(binId: String): Observable<GarbageBin> {
    return this.http.get<GarbageBin>(`'http://localhost:8080/api/garbageBin/getBin/${binId}`);
  }
*/
  // OK
  public getAllBins(): Observable<GarbageBin[]> {
    return this.http.get<GarbageBin[]>('http://localhost:8080/api/garbageBin/getAllBins');
  }

  // OK
  addBin(bin: GarbageBin) {
    console.log(bin);
    return this.http.post('http://localhost:8080/api/garbageBin/addBin', bin);
  }
}
