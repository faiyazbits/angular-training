import { User } from '../../model/user';
import { UserService } from '../../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    users: User[];
    selectedUser: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.userService.getUserList();
        this.selectedUser = this.users[0];
    }

    onUserSelect(user: User) {
        this.selectedUser = user;
    }
}
