import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }
  vote(voteType: string, token: string, binId: number) {
    const vote = { "votetype": voteType, "binId": binId }
    console.log(token);
    return this.http.post(`http://localhost:8080/api/vote/vote?token=${token}`, vote);
  }
}