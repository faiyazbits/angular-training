import { Project } from './../../model/project';
import { ProjectService } from './../../project/project.service';
import { UserService } from './../../user/user.service';
import { User } from './../../model/user';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
export class UserProjectsComponent implements OnInit {
  users: User[] = [];

  selectedUser;
  projects: Project[] = [];

  constructor(private userService: UserService, private projectService: ProjectService) { }

  ngOnInit() {
    this.users = this.userService.getUserList();
    console.log(this.users);
  }

  onUserClick(user) {
    console.log(user);
    this.selectedUser = user;
    this.projects = this.projectService.filterdProjectsByUserId(user.id);
  }

  getActiveUserClass(user) { 
    return this.selectedUser && user.id === this.selectedUser.id;
  }
}
