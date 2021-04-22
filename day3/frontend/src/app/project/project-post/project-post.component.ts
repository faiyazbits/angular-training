import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-post',
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent implements OnInit {

  posts: any = [];
  commentData: any = {};
  selectedPostIdList: any = [];
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
    if (!this.selectedPostIdList.includes(post.id)) {
      this.selectedPostIdList.push(post.id);

      const commentsObsevable = this.projectService.getPostComments(post.id);
      commentsObsevable.subscribe((comments) => {
        this.commentData[post.id] = comments;
      })

    } else {
      this.selectedPostIdList = this.selectedPostIdList.filter(id => id !== post.id)
      this.commentData[post.id] = [];
    }

  }

  getActivePost(post) {
    return this.selectedPostIdList.includes(post.id);
  }

  getComments(post) {
    return this.commentData[post.id];
  }

}
