import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: [ './user-dashboard.component.css' ]
})

export class UserDashboard implements OnInit {

  users: User[];
  selectedUser:User;
  

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = this.userService.getUserList();
    this.selectedUser = this.users[0];
    
  }

  onUserSelected(user: User) {
    this.selectedUser =  user;
  }

}