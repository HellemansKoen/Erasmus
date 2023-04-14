import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
  export class PostService {

    constructor(private http: HttpClient) { }
   
    // OK
    addPost(post: any) {
      console.log(post);
      return this.http.post('http://localhost:8080/api/post/addPost', post);
    }
    // OK
    public getAllPosts(): Observable<Post[]> {
      return this.http.get<Post[]>('http://localhost:8080/api/post/getAllPosts');
    }
  }
