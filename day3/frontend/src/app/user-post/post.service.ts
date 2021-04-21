import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const Base_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {
    }

    fetchUserPosts() {
        return this.http.get(Base_URL + 'posts');
    }

    fetchPostsCommentsById(postId) {
        return this.http.get(Base_URL +  'posts/' + postId +  '/comments');
    }
}
