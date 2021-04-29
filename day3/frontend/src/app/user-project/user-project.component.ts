import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {Project} from "../model/project";
import {UserService} from "../user/user.service";
import {ProjectService} from "../project/project.service";

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css']
})
export class UserProjectComponent implements OnInit {
  users: User [] = [];
  projects: Project [] = [];
  selectedUserId;

  constructor(private userService: UserService, private projectService: ProjectService) {
    this.users = userService.getUserList();
  }

  ngOnInit() {
  }

  onUserProjectList(user) {
    // user.active = !user.active;
    this.selectedUserId = user.id;
    this.projects = this.projectService.filterProjectByUserId(user.id);
  }
}
