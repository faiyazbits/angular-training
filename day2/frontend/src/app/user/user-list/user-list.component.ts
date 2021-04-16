import { UserService } from '../../user/user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../model/user'
//import { Router } from '@angular/router';

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

  onSearchByName(searchTerm) {
    this.users = this.userService.fetchUsersBySearchText(searchTerm);
    this.userSelected.emit(this.users[0]);
  }

  onFilterByDesignation(designation) {
    if (designation == 'all') {
      this.users = this.userService.getUserList();
      this.userSelected.emit(this.users[0]);
      return;
    }
    this.users = this.userService.fetchUsersByDesignation(designation);
    this.userSelected.emit(this.users[0]);
  }

  onFilterByGender(gender) {
    this.users = this.userService.fetchUsersByGender(gender);
    this.userSelected.emit(this.users[0]);
  }
  
  navigateToLoginPage() {
    this.userService.navigateToLoginPage();
  }
}