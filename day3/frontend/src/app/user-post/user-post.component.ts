import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';


@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
    posts;
    comments;
    selectedPost;
    display: boolean = false;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        const postObservable = this.postService.fetchUserPosts();
        postObservable.subscribe(posts => {
            this.posts = posts;
        });
    }

    onClickShowPostComments(post) {
        this.selectedPost = post;
        const commentsObservable = this.postService.fetchPostsCommentsById(post.id);
        commentsObservable.subscribe((comments) => {
            this.comments = comments;
            this.display = true;
        });
    }
}
