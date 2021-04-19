import { Credentials } from './../model/credentials';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserGender } from '../model/user.gender';

const users: User[] = [
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
    id: 5,
    name: 'John Watson',
    designation: 'Project Architect',
    gender: UserGender.MALE,
    age: 37,
    salary: 950
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
  selectedUser: User = users[0];
  credentials: Credentials = {
    username: 'sheerin@provility.com',
    password: 'sheerin@1992'
  };
  invalidLogin: boolean;

  constructor() { }

  getUserList() {
    return users;
  }

  getTotalUserCount() {
    return users.length;
  }

  getFemaleUserCount() {
    const femaleUsers = users.filter((user) => {
      return user.gender == UserGender.FEMALE
    });
    return femaleUsers.length;
  }

  getMaleUserCount() {
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

  findUserById(id) {
    return users.find((user) => {
      return user.id == id;
    })
  }

  setLocalStorage() {
    localStorage.setItem('userToken', 'sheerin');
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  checkForValidCredentials(username, password) {
    if (this.credentials.username == username && this.credentials.password == password) {
      this.setLocalStorage();
    } else {
      this.clearLocalStorage();
      this.invalidLogin = true;
    }
  }
}
