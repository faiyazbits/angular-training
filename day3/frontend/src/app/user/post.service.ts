import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const Base_URL = 'https://jsonplaceholder.typicode.com/';

@Injectable()
export class PostService {
    constructor(private http: HttpClient) {
    }

    fetchUserPost() {
        return this.http.get(Base_URL + 'posts');
    }
}
