import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    {
      id: 1,
      name: 'John Watson',
      designation: 'Project Manager',
      gender: 'male'
    },
    {
      id: 2,
      name: 'Raja Sekar',
      designation: 'Team Leader',
      gender: 'male'
    },
    {
      id: 3,
      name: 'Preethi Chawla',
      designation: 'Project Manager',
      gender: 'female'
    },
    {
      id: 4,
      name: 'Ashraf',
      designation: 'Project Delivery Head',
      gender: 'male'
    },
    {
      id: 5,
      name: 'John Watson',
      designation: 'Project Architect',
      gender: 'male'
    },
    {
      id: 6,
      name: 'Emma Tom',
      designation: 'Project Manager',
      gender: 'female'
    },
    {
      id: 7,
      name: 'Nick',
      designation: 'Team Leader',
      gender: 'male'
    }
  ]

  constructor() { }

  getUserList(): User[] {
    return this.userList;
  }

  getMaleUserCount(): number {
    const maleUsers = this.userList.filter((user) => {
      return user.gender == "male";
    });
    return maleUsers.length;
  }

  getFemaleUserCount(): number {
    const femaleUsers = this.userList.filter((user) => {
      return user.gender == "female";
    });
    return femaleUsers.length;
  }
}