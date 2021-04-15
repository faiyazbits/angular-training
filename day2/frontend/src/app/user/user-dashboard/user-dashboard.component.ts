import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from '../user.service';


@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

    selectedUser: User;

    constructor(private userService: UserService) {
    }


    ngOnInit() {
        this.selectedUser = this.userService.getUserList()[0];
    }

    onUserSelect(user: User) {
        this.selectedUser = user
    }

}
