import { Component, OnInit } from "@angular/core";
import { PostsService } from '../posts.service'
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit {
    fetchedPosts;
    constructor(private postsService: PostsService) { }


    ngOnInit() {
        let postsTofetchObservable = this.postsService.fetchPostsFromExternalApi()
        postsTofetchObservable.subscribe((fetchPosts) => {
            this.fetchedPosts = this.fetchedPosts.data;
            console.log(this.fetchedPosts.data)

        })
    }
}