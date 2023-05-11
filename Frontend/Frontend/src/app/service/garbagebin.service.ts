import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

  lat = ""
  lng = ""

  constructor(private http: HttpClient) { }
  /*
    public getBin(binId: String): Observable<any> {
      return this.http.get<any>(`'http://localhost:8080/api/garbageBin/getBin/${binId}`);
    }
  */

  // was OK
  public getAllBins(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/garbageBin/getAllBins');

  }

  // OK
  addBin(bin: any, token: any) {
    console.log(bin);
    console.log("test: " + token);
    return this.http.post(`http://localhost:8080/api/garbageBin/addBin?token=${token}`, bin);
  }
}
