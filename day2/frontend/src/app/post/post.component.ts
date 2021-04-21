import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "../model/post";
import { Router, NavigationStart, NavigationEnd, Event } from "@angular/router";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post;
  selectedPost;
  comments;
  showComments: boolean = false;

  timeout;
  routerChanged: boolean = true;

  constructor(private postService: PostService, private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
          this.routerChanged = false;
        }, 2000);
      }
    });
  }

  ngOnInit() {
    const postData = this.postService.fetchPost();
    postData.subscribe((post) => {
      console.log(post);
      this.post = post;
    });
  }

  onClickShowPostComments(post) {
    console.log("Im clicked");
    this.selectedPost = post;
    const commentsData = this.postService.fetchPostByComments(post.id);
    commentsData.subscribe((comments) => {
      console.log(comments);
      this.comments = comments;
      this.showComments = true;
    });
  }
}
