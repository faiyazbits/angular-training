import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-post',
  templateUrl: './fetch-post.component.html',
  styleUrls: ['./fetch-post.component.css']
})
export class FetchPostComponent implements OnInit {
  
  posts;
  comments;
  selectedPost;
  show: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    const postsObservable = this.postsService.fetchPosts();
    postsObservable.subscribe((posts) => {
      this.posts = posts;
    })
  }
  onClickShowComments(post) {
    this.selectedPost = post;
    const commentsObservable = this.postsService.fetchCommentsByPostId(post.id);
    commentsObservable.subscribe((comments) => {
      this.comments = comments;
      this.show = true;
    });
  }
}
