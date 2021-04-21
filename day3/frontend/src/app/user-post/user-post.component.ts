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
    spinner = false;

    constructor(private postService: PostService) {
        this.fetchUser = this.fetchUser.bind(this);
    }

    ngOnInit() {
        this.spinner = true;
        setTimeout(this.fetchUser, 5000);
    }

    fetchUser() {
        const postObservable = this.postService.fetchUserPosts();
        postObservable.subscribe(posts => {
            this.posts = posts;
            this.spinner = false;
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
