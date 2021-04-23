import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';


@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
    posts;
    postComments: any = {};
    userSelectedPostIdList: any = [];
    loading: boolean = true;

    constructor(private postService: PostService) {

    }

    ngOnInit() {
        const postObservable = this.postService.fetchUserPosts();
        postObservable.subscribe(posts => {
            this.loading = false;
            this.posts = posts;
        });
    }

    onClickShowPostComments(post) {
        if (!this.userSelectedPostIdList.includes(post.id)) {
            this.userSelectedPostIdList.push(post.id);
            const commentsObservable = this.postService.fetchPostsCommentsById(post.id);
            commentsObservable.subscribe((comments) => {
                this.postComments[post.id] = comments;
            });
        }
        else {
            this.userSelectedPostIdList = this.userSelectedPostIdList.filter(id => id !== post.id); //programatically remove id
            this.postComments[post.id] = [];

        }


    }

}
