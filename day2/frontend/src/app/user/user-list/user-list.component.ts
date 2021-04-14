// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use user-gender component)

import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User [] = [];
  constructor(private userService: UserService) {
    this.users = this.userService.getUserList();
  }
  ngOnInit() {}
}
