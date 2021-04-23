import { Injectable } from '@angular/core'
import { User } from '../model/user'
import { userGender } from '../model/user.gender'

const users: User[] = [{
    id: 1,
    name: 'John Watson',
    designation: 'Project Manager',
    gender: userGender.MALE,
    age: 22
},
{
    id: 2,
    name: 'Raja Sekar',
    designation: 'Team Leader',
    gender: userGender.MALE,
    age: 30
},
{
    id: 3,
    name: 'Preethi Chawla',
    designation: 'Project Manager',
    gender: userGender.FEMALE,
    age: 33
},
{
    id: 4,
    name: 'Ashraf',
    designation: 'Project Delivery Head',
    gender: userGender.MALE,
    age: 27
},
{
    id: 5,
    name: 'John Watson',
    designation: 'Project Architect',
    gender: userGender.MALE,
    age: 35
},
{
    id: 6,
    name: 'Emma Tom',
    designation: 'Project Manager',
    gender: userGender.FEMALE,
    age: 25
},
{
    id: 7,
    name: 'Nick',
    designation: 'Team Leader',
    gender: userGender.MALE,
    age: 38
}
];

@Injectable()
export class UserService {
    selectedUser: User = users[0]


    constructor() { }

    getUserList() {
        return users;
    }

    getTotalUserCount() {
        return users.length;
    }

    getFemaleUserCount() {
        const femaleUsers = users.filter((user) => {
            return user.gender == userGender.FEMALE
        });
        return femaleUsers.length;
    }

    getMaleUserCount() {
        const maleUsers = users.filter((user) => {
            return user.gender == userGender.MALE
        });
        return maleUsers.length;
    }

    fetchUsersBySearchText(searchText) {
        return users.filter((user) => {
            return user.name.includes(searchText);
        });
    }

    fetchUsersByDesignation(designation) {
        return users.filter((user) => {
            return user.designation == designation;
        });
    }

    fetchUsersByGender(gender) {
        return users.filter((user) => {
            return user.gender == gender;
        });
    }
addUserFromReactiveForm(newUser){
users.push(newUser)
}
}
