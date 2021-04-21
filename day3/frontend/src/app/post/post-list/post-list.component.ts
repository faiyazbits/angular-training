import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  comments: any = [];
  selectedPost;
  show: boolean = false;
  loading: boolean = false;
 
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    const postsObservable = this.postsService.fetchPosts();
    postsObservable.subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClickShowComments(post) {
    this.selectedPost = post;
    this.loading = true;
    const commentsObservable = this.postsService.fetchCommentsByPostId(post.id);
    commentsObservable.subscribe((comments) => {
      this.comments = comments;
      this.loading = false;
    });
    this.show = !this.show;
  }
}
