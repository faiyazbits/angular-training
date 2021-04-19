// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use user-gender component)

import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    users: User [] = [];
    @Input() selectedUser;
    @Output() userSelected = new EventEmitter<User>();

    constructor(private userService: UserService, private router: Router) {
        this.users = this.userService.getUserList();
    }

    onUserClick(user) {
        this.userSelected.emit(user);
    }

    getActiveUserRow(user) {
        return user.id === this.selectedUser.id;
    }

    onSearchUser(searchText) {
        this.users = this.userService.fetchUserBySearchText(searchText);
        this.userSelected.emit(this.users[0]);
    }

    onFilterByGender(gender) {
        if (gender === 'all') {
            this.users = this.userService.getUserList();
            this.userSelected.emit(this.users[0]);
            return;
        }
        this.users = this.userService.fetchUserByGender(gender);
        this.userSelected.emit(this.users[0]);
    }

    onFilterByType(type) {
        this.users = this.userService.fetchUserByType(type);
        this.userSelected.emit(this.users[0]);
    }

    removeItem(id) {
        this.users = this.users.filter(item => item.id !== id);
    }

    editUser(id) {
        this.router.navigateByUrl(`/users/edit/${id}`);
    }

}
