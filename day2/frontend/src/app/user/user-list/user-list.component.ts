import { UserService } from '../../user/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../model/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];

  @Input() selectedUser;

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) {
    this.users = this.userService.getUserList();
  }

  ngOnInit() { }

  onUserClick(user) {
    this.userSelected.emit(user);
  }

  getActiveUserClass(user) {
    return user.id === this.selectedUser.id; 
  }

}