import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { ProjectService } from 'src/app/project/project.service';
import { UserService } from "../user.service";


@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.css']
})

export class UserProjectComponent  {

  users:User[] =[];
  projects:Project[] =[];
  selectedUser;

  showLayout:boolean = true;


  constructor(private userService:UserService , private projectService : ProjectService) { 
    this.users = this.userService.getUserList();
    this.projects = this.projectService.getProjectList();
  }
   
  onUserClicked(user) {
    this.selectedUser = user;
    console.log(this.selectedUser)
    this.projects = this.projectService.filteringProjectsByUserId(user.id)
    console.log(this.projects)

  }

  toggle() {
    this.showLayout = !this.showLayout;

  }
}