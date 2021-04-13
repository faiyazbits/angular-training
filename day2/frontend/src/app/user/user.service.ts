import { Injectable } from '@angular/core';
import { User } from '../model/user'
import { UserGender } from '../model/user.gender'

const users: User[] = [
  {
    id: 1,
    name: 'John Watson',
    designation: 'Project Manager',
    gender: UserGender.MALE,
    age: 35
  },
  {
    id: 2,
    name: 'Raja Sekar',
    designation: 'Team Leader',
    gender: UserGender.MALE,
    age: 31
  },
  {
    id: 3,
    name: 'Preethi Chawla',
    designation: 'Project Manager',
    gender: UserGender.FEMALE,
    age: 28
  },
  {
    id: 4,
    name: 'Ashraf',
    designation: 'Project Delivery Head',
    gender: UserGender.MALE,
    age: 45
  },
  {
    id: 5,
    name: 'John Watson',
    designation: 'Project Architect',
    gender: UserGender.MALE,
    age: 37
  },
  {
    id: 6,
    name: 'Emma Tom',
    designation: 'Project Manager',
    gender: UserGender.FEMALE,
    age: 30
  },
  {
    id: 7,
    name: 'Nick',
    designation: 'Team Leader',
    gender: UserGender.MALE,
    age: 29
  }
];
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = users[0];

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
}
