import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
totalEmployeeCount;
maleEmployeeCount;
feMaleEmployeeCount;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.totalEmployeeCount = this.userService.getTotalEmployeeCount();
    this.maleEmployeeCount = this.userService.getMaleEmployeeCount();
    this.feMaleEmployeeCount = this.userService.getFeMaleEmployeeCount();
  }

}