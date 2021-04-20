import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from '../user.service';


@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
    posts;
    @Output() selectedPost = new EventEmitter<any>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        const postObservable = this.userService.fetchUserPost();
        postObservable.subscribe((posts) => {
            this.posts = posts;

        });
    }

    toggleDisplayComments() {

    }

    onPostSelected(posts) {
        this.selectedPost = posts;
    }
}
