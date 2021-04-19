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

  onSearchByName(searchTerm) {
    this.users = this.userService.filterUsersBySearchText(searchTerm);
    this.userSelected.emit(this.users[0]);
}

onFilterByDesignation(designation){
    if(designation=='all'){
        this.users = this.userService.getUserList();
        this.userSelected.emit(this.users[0]);
        return;
    }
    this.users = this.userService.filterUsersByDesignation(designation);
    this.userSelected.emit(this.users[0]);
}

onFilterByGender(gender){
    this.users = this.userService.filterUsersByGender(gender);
    this.userSelected.emit(this.users[0]);
}

}