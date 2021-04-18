import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../user.service";

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    Users: User [];
    selectedUser: User;

    constructor(private userServive: UserService) {
    }

    ngOnInit() {
        this.Users = this.userServive.getUserList();
    }

    onUserSelect(user: User) {
        this.selectedUser = user;
    }


}
