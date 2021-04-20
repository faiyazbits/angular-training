import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "../model/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    const postData = this.postService.fetchPost();
    postData.subscribe((post) => {
      console.log(post);
      this.post = post;
    });
  }
}
