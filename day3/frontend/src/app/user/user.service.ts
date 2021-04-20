import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {UserGender} from '../model/user.gender';
import {UserStatus} from '../model/user.status';
import {UserType} from '../model/user.type';


const users: User[] = [
    {
        id: 1,
        name: 'John Watson',
        age: 45,
        designation: 'Project Manager',
        gender: UserGender.MALE,
        status: UserStatus.DDS,
        type: UserType.CONTRACT_BASED
    },
    {
        id: 2,
        name: 'Raja Sekar',
        age: 42,
        designation: 'Team Leader',
        gender: UserGender.MALE,
        status: UserStatus.DDS,
        type: UserType.CONTRACT_BASED
    },
    {
        id: 3,
        name: 'Preethi Chawla',
        age: 40,
        designation: 'Senior Software Developer',
        gender: UserGender.FEMALE,
        status: UserStatus.DDS,
        type: UserType.CONTRACT_BASED
    },
    {
        id: 4,
        name: 'Ashraf',
        age: 45,
        designation: 'Project Delivery Head',
        gender: UserGender.MALE,
        status: UserStatus.DDS,
        type: UserType.FULLTIME
    },
    {
        id: 5,
        name: 'John Mical',
        age: 45,
        designation: 'Project Architect',
        gender: UserGender.MALE,
        status: UserStatus.DDS,
        type: UserType.FULLTIME
    },
    {
        id: 6,
        name: 'Emma Tom',
        age: 45,
        designation: 'Project Manager',
        gender: UserGender.FEMALE,
        status: UserStatus.EFORM,
        type: UserType.FULLTIME
    },
    {
        id: 7,
        name: 'Nick',
        age: 45,
        designation: 'Team Leader',
        gender: UserGender.MALE,
        status: UserStatus.EFORM,
        type: UserType.FULLTIME
    }
];


@Injectable()
export class UserService {
    constructor() {
    }

    getUserList() {
        return users;
    }

    getTotalEmployeeCount() {
        return users.length;
    }

    getMaleEmployeeCount() {
        const maleUsers = users.filter((user) => {
            return user.gender === UserGender.MALE;
        });
        return maleUsers.length;
    }

    getFeMaleEmployeeCount() {
        const FeMaleUsers = users.filter((user) => {
            return user.gender === UserGender.FEMALE;
        });
        return FeMaleUsers.length;
    }

    fetchUserBySearchText(searchText) {
        return users.filter((user) => {
            return user.name.includes(searchText);
        });
    }

    fetchUserByGender(gender) {
        return users.filter((user) => {
            return user.gender === gender;
        });
    }

    fetchUserByType(type) {
        return users.filter((user) => {
            return user.type === type;
        });
    }

    createNewUser(newUser) {
        return users.push(newUser);
    }

    deleteUserId(userId) {
        const userIndexObj = users.find((user) => {
            return user.id === userId;
        });
        const index = users.indexOf(userIndexObj);
        users.splice(index, 1);
    }

    findUserById(id) {
        return users.find((user) => {
            return user.id === id;
        });
    }
}
