import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from "../../model/project";
import { UserService } from "../../user/user.service";

@Component({
    selector: 'app-project-dashboard',
    templateUrl: './user-projectDashboard.component.html',
    styleUrls: ['./user-projectDashboard.component.css']
})
export class UserProjectDashboardComponent implements OnInit {

    users: User[];
    selectedUser: User;
    projectsOfUser;
    hasProject: boolean = false;

    constructor(private userService: UserService, private ProjectService: ProjectService) {
    }

    ngOnInit() {
        // this.activeProject = false;
        this.users = this.userService.getUserList();
        this.selectedUser = this.users[0];
        this.projectsOfUser = this.ProjectService.getProjectsOfUserById(this.selectedUser.id)
    }

    onUserClick(user: User) {
        this.projectsOfUser = this.ProjectService.getProjectsOfUserById(user.id);
        this.selectedUser = user;
        if (!this.projectsOfUser.length) {
            this.hasProject = true;
        } else {
            this.hasProject = false;
        }

    }
    getActiveUserClass(user) {
        return this.selectedUser && user.id == this.selectedUser.id
    }

}