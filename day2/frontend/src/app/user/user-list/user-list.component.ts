import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../../model/user";
import { Gender } from "../../model/user.gender";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})


export class UserListComponent {

  users: User[] = [];

  @Input() selectedUser;

  @Output() onSelected = new EventEmitter<User>();


  constructor(private userService: UserService) {
    this.users = this.userService.getUserList();
  }

  onUserClick(user) {
    this.onSelected.emit(user);
  }

  getActiveUser(user) {
    return user.id == this.selectedUser.id;
  }

  onSearchUser(searchTerm) {
    this.users = this.userService.fetchUsersBySearchingText(searchTerm);
    this.onSelected.emit(this.users[0]);
  }

  onfilterByStatus(status) {
    if(status =='all') {
      this.users = this.userService.getUserList();
      this.onSelected.emit(this.users[0]);
      return ;
    }
    this.users = this.userService.fetchUsersByStatus(status);
    this.onSelected.emit(this.users[0]);
       
  }

  onfilterByGender(gender) {
    this.users = this.userService.fetchUserByGender(gender);
    this.onSelected.emit(this.users[0])
  }

  ngOnInit() {}
}
