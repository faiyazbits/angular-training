import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "https://jsonplaceholder.typicode.com/"; 

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  fetchPosts(){
    return this.http.get(BASE_URL + "posts");
  }
  fetchCommentsByPostId(postId){
    return this.http.get(BASE_URL + "posts/" + postId + "/comments");
  }
}
