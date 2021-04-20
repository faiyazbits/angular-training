import { Component, OnInit, Input } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
@Input() userComments;
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

}
