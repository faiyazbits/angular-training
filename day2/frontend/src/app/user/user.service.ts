import {Injectable} from '@angular/core';
import {User} from "../model/user";
import {UserType} from "../model/user.type";
import {UserStatus} from "../model/user.status";

const users: User[] = [
    {
        id: 1,
        name: 'John Watson',
        age: 45,
        designation: 'Project Manager',
        gender: UserType.MALE,
        status: UserStatus.DDS
    },
    {
        id: 2,
        name: 'Raja Sekar',
        age: 42,
        designation: 'Team Leader',
        gender: UserType.MALE,
        status: UserStatus.DDS
    },
    {
        id: 3,
        name: 'Preethi Chawla',
        age: 40,
        designation: 'Project Manager',
        gender: UserType.FEMALE,
        status: UserStatus.DDS
    },
    {
        id: 4,
        name: 'Ashraf',
        age: 45,
        designation: 'Project Delivery Head',
        gender: UserType.MALE,
        status: UserStatus.DDS
    },
    {
        id: 5,
        name: 'John Watson',
        age: 45,
        designation: 'Project Architect',
        gender: UserType.MALE,
        status: UserStatus.DDS
    },
    {
        id: 6,
        name: 'Emma Tom',
        age: 45,
        designation: 'Project Manager',
        gender: UserType.FEMALE,
        status: UserStatus.EFORM
    },
    {
        id: 7,
        name: 'Nick',
        age: 45,
        designation: 'Team Leader',
        gender: UserType.MALE,
        status: UserStatus.EFORM
    }
];

@Injectable()
export class UserService {
    constructor() {
    }
    getUserList() {
      return users;
    }

}
