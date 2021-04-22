import {Component, OnInit} from '@angular/core';
import {User} from "../../../../../../day2/frontend/src/app/model/user";
import {UserService} from "../../../../../../day2/frontend/src/app/user/user.service";
import {AuthenticationService} from "../../../../../../day2/frontend/src/app/user/authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    Users: User [];
    selectedUser: User;

    constructor(private authenticationService: AuthenticationService, private userServive: UserService, private router: Router) {
    }

    ngOnInit() {
        this.Users = this.userServive.getUserList();
    }

    onUserSelect(user: User) {
        this.selectedUser = user;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigateByUrl('/login');
    }
}