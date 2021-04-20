import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';


@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
    posts;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        const postObservable = this.postService.fetchUserPost();
        postObservable.subscribe(posts => {
            this.posts = posts;
        });
    }
}
