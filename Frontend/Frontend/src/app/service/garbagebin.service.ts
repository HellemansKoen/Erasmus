import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GarbagebinService {

  lat = "";
  lng = "";
  latSingleBin=""
  lngSingleBin=""
  binId = 0;
  kindBin= ""
  binFull = ""

  constructor(private http: HttpClient) { }

  /*
    public getBin(binId: String): Observable<any> {
      return this.http.get<any>(`'http://localhost:8080/api/garbageBin/getBin/${binId}`);
    }
  */

  public getAllBins(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/garbageBin/getAllBins');
  }

  addBin(bin: any, token: any) {
    return this.http.post(`http://localhost:8080/api/garbageBin/addBin?token=${token}`, bin);
  }
  full(state: string ,binId: number) {
    return this.http.put(`http://localhost:8080/api/garbageBin/full?binId=${binId}`,state);
  }
}
