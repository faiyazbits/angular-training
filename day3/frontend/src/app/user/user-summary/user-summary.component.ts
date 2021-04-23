import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-user-summary',
    templateUrl: './user-summary.component.html',
    styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
    totalUserCount;
    maleUserCount;
    femaleUserCount;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.totalUserCount = this.userService.getTotalUserCount();
        this.femaleUserCount = this.userService.getFemaleUserCount();
        this.maleUserCount = this.userService.getMaleUserCount();
    }

}