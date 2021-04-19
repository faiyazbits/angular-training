import { Injectable } from '@angular/core';
import { User } from '../model/user'
import { UserGender } from '../model/user.gender'
import { BehaviorSubject } from 'rxjs';

let users: User[] = [];
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  selectedUser: User = users[0];

  constructor() { }

  getUserList() {
    users = JSON.parse(localStorage.getItem('users'));
    return users === null ? [] : users;
  }

  setLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getTotalUserCount() {
    users = this.getUserList();
    return users.length;
  }

  getFemaleUserCount() {
    users = this.getUserList();
    const femaleUsers = users.filter((user) => {
      return user.gender == UserGender.FEMALE
    });
    return femaleUsers.length;
  }

  getMaleUserCount() {
    users = this.getUserList();
    const maleUsers = users.filter((user) => {
      return user.gender == UserGender.MALE
    });
    return maleUsers.length;
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
    users.push(newUser);
    this.setLocalStorage(users);
  }

  deleteUser(userId){
    const foundUser = users.find((user) =>{
      return user.id == userId;
    });
    const index = users.indexOf(foundUser);
    users.splice(index,1);
    this.setLocalStorage(users);
  }


  setLocalStorage1(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

}
