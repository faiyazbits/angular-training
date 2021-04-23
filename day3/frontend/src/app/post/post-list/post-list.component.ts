import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  postCommentsMapper: any = {};
  openedPosts: any = [];
  loading: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    const postsObservable = this.postsService.fetchPosts();
    postsObservable.subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClickShowComments(post) {
    this.loading = true;
    if (!this.openedPosts.includes(post.id)) {
      this.openedPosts.push(post.id);
    } else {
      let index = this.openedPosts.indexOf(post.id);
      this.openedPosts.splice(index, 1);
    }
    if (this.postCommentsMapper[post.id]) {
      this.loading = false;
      return
    }
    const commentsObservable = this.postsService.fetchCommentsByPostId(post.id);
    commentsObservable.subscribe((postComments) => {
      this.postCommentsMapper[post.id] = postComments;
      this.loading = false;
    });
  }
  showOpenedPost(post) {
    return this.openedPosts.includes(post.id);
  }
}  
