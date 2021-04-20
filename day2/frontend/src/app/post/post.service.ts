import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const POST_URL = "https://jsonplaceholder.typicode.com";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPost() {
    return this.http.get(POST_URL + "/posts");
  }
}
