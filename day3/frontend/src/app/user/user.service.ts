import { Injectable } from '@angular/core';
import { User } from '../model/user'
import { UserGender } from '../model/user.gender'
import { BehaviorSubject } from 'rxjs';

let users: User[] = [
  {
    id: 1,
    name: 'John Watson',
    designation: 'Project Manager',
    gender: UserGender.MALE,
    age: 35,
    salary: 700
  },
  {
    id: 2,
    name: 'Raja Sekar',
    designation: 'Team Leader',
    gender: UserGender.MALE,
    age: 31,
    salary: 500
  },
  {
    id: 3,
    name: 'Preethi Chawla',
    designation: 'Project Manager',
    gender: UserGender.FEMALE,
    age: 28,
    salary: 750
  },
  {
    id: 4,
    name: 'Ashraf',
    designation: 'Project Delivery Head',
    gender: UserGender.MALE,
    age: 45,
    salary: 1000
  },
  {
    id: 6,
    name: 'Emma Tom',
    designation: 'Project Manager',
    gender: UserGender.FEMALE,
    age: 30,
    salary: 700
  },
  {
    id: 7,
    name: 'Nick',
    designation: 'Team Leader',
    gender: UserGender.MALE,
    age: 29,
    salary: 500
  }
];

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
    return users;
    /*users = JSON.parse(localStorage.getItem('users'));
    return users === null ? [] : users;*/
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
