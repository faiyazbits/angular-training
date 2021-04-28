import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const BASE_URL = 'https://reqres.in/api'

@Injectable()


export class PostsService {
    constructor(private http: HttpClient) {

    }
    fetchPostsFromExternalApi() {
        return this.http.get(BASE_URL + '/posts')
    }
}