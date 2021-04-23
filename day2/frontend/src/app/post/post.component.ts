import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "./post.service";


@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {

  post;
  // showComments ;
  selectedPost: any = [];
  comments:any = {};

  // showComments: boolean = false; 
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

  /* WHEN CLICKING THE POST SHOW THAT PARTICULAR POST COMMENT (SINGLE POST WITH SINGLE CMT)
  onClickShowPostComments(post) {
    console.log("Im clicked");
    this.selectedPost = post;
    const commentsData = this.postService.fetchPostByComments(post.id);
    commentsData.subscribe((comments) => {
      console.log(comments);
      this.comments = comments;
    });
  }*/




  // WHEN CLICKING THE POST SHOW THAT PARTICULAR POST COMMENT (MULTIPLE POST MULTIPLE CMT)

  onClickShowPostComments(post) {
    console.log("I'm Got Clicked !")
    if(!this.selectedPost.includes(post.id)) {
      this.selectedPost.push(post.id);
      const commentsData = this.postService.fetchPostByComments(post.id);
      commentsData.subscribe((comment) => {
        this.comments[post.id] = comment;
      })
    }
    else {
      this.selectedPost = this.selectedPost.filter(id => id !== post.id);
      this.comments[post.id] = [];
    }
  }
}


