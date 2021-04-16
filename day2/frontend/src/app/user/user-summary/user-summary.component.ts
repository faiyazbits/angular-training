import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-user-summary',
    templateUrl: './user-summary.component.html',
    styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

    totalUserCount: number;
    totalMaleUserCount: number;
    totalFemaleUserCount: number;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.totalUserCount = this.userService.getUserList().length;
        this.totalMaleUserCount = this.userService.getMaleUserCount();
        this.totalFemaleUserCount = this.userService.getFemaleUserCount();
    }

}
