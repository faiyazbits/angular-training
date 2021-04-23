import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "./post.service";


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
  // FOR SPINNER 
  spinnerLoading: boolean = true;
 

  constructor(private postService: PostService) {
   
  }

  ngOnInit() {
    const postData = this.postService.fetchPost();
    postData.subscribe((post) => {
      console.log(post);
      this.spinnerLoading = false;
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
