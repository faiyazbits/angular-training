import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-post',
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent implements OnInit {

  posts: any = [];
  comments: any = [];
  selectedPostId: string = "";
  loading = true;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    const userObsevable = this.projectService.fetchPosts();
    userObsevable.subscribe((posts) => {
      this.loading = false;
      this.posts = posts;
    })
  }

  onPostSelected(post) {
    this.selectedPostId = post.id;
    console.log(this.selectedPostId);

    const commentsObsevable = this.projectService.getPostComments(post.id);
    commentsObsevable.subscribe((comments) => {
      this.comments = comments;
    })
  }

  getActivePost(post) {
    return this.selectedPostId == post.id;
  }

}
