import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class PostService {

    constructor(private http: HttpClient) { }
   
    // OK
    addPost(post: any) {
      return this.http.post('http://localhost:8080/api/post/addPost', post);
    }
    // OK
    public getAllPosts(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:8080/api/post/getAllPosts');
    }
  }
