import { Injectable } from '@angular/core';
import { User } from '../model/user'
import { UserGender } from '../model/user.gender'
import { BehaviorSubject, Subject } from 'rxjs';

let users: User[] = [];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users$ : BehaviorSubject<User[]> = new BehaviorSubject([]);
  
  selectedUser: User = users[0];

  constructor() { 
    users = this.getUserList();
    this.users$.next(users);
  }

  getUserList() {
    users = JSON.parse(localStorage.getItem('users'));
    return users === null ? [] : users;
  }

  setLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  filterUsersBySearchText(searchText) {
    return users.filter((user) => {
      return user.name.includes(searchText);
    });
  }

  filterUsersByDesignation(designation) {
    return users.filter((user) => {
      return user.designation == designation;
    });
  }

  filterUsersByGender(gender) {
    return users.filter((user) => {
      return user.gender == gender; 
    });
  }

  createNewUser(newUser) {
    users = this.getUserList();
    users.push(newUser);
    this.users$.next(users);
    this.setLocalStorage(users);
  }

  deleteUser(userId) {
    const foundUser = users.find((user) => {
      return user.id == userId;
    });
    const index = users.indexOf(foundUser);
    users.splice(index, 1);
    this.users$.next(users);
    this.setLocalStorage(users);
  }

  findUserById(id) {
    return users.find((user) => {
      return user.id == id;
    })
  }

  updateUser(userToBeUpdated) {
    const foundUser = users.find((user) => {
      return user.id == userToBeUpdated.id;
    });
    foundUser.name = userToBeUpdated.name;
    foundUser.designation = userToBeUpdated.designation;
    foundUser.gender = userToBeUpdated.gender;
    foundUser.age = userToBeUpdated.age;
    foundUser.salary = userToBeUpdated.salary;
    this.users$.next(users);
    this.setLocalStorage(users);
  }

}
