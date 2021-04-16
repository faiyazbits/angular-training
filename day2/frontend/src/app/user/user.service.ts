/* Why Service ..? 
The point is to keep the data from components .
When using Service always keep using @Injectable
 */
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { Gender } from "../model/user.gender";
import { UserStatus } from "../model/user.status";

const users: User[] = [
  {
    id: 1,
    name: "John Watson",
    designation: "Project Manager",
    gender: Gender.MALE,
    status: UserStatus.ACTIVE,
  },
  {
    id: 2,
    name: "Raja Sekar",
    designation: "Team Leader",
    gender: Gender.MALE,
    status: UserStatus.IN_ACTIVE,
  },
  {
    id: 3,
    name: "Preethi Chawla",
    designation: "Project Manager",
    gender: Gender.FEMALE,
    status: UserStatus.ACTIVE,
  },
  {
    id: 4,
    name: "Ashraf",
    designation: "Project Delivery Head",
    gender: Gender.MALE,
    status: UserStatus.ACTIVE,
  },
  {
    id: 5,
    name: "John Watson",
    designation: "Project Architect",
    gender: Gender.MALE,
    status: UserStatus.IN_ACTIVE,
  },
  {
    id: 6,
    name: "Emma Tom",
    designation: "Project Manager",
    gender: Gender.FEMALE,
    status: UserStatus.ACTIVE,
  },
  {
    id: 7,
    name: "rafiq",
    designation: "Developer",
    gender: Gender.MALE,
    status: UserStatus.IN_ACTIVE,
  },
  {
    id: 8,
    name: "siddiq",
    designation: "Developer",
    gender: Gender.MALE,
    status: UserStatus.IN_ACTIVE,
  },
  {
    id: 9,
    name: "raabiya",
    designation: "Developer ",
    gender: Gender.FEMALE,
    status: UserStatus.IN_ACTIVE,
  },
  {
    id: 10,
    name: "sarah",
    designation: "Developer",
    gender: Gender.FEMALE,
    status: UserStatus.IN_ACTIVE,
  },
];

// By this dependancy injection we can use this anywhere in the app in any components
@Injectable()
export class UserService {
  selectedUser: User = users[0];

  constructor() {}

  getUserList() {
    return users;
  }

  getTotalUserCount() {
    return users.length;
  }

  getMaleUserCounts() {
    const maleCounts = users.filter((user) => {
      return user.gender == Gender.MALE;
    });
    return maleCounts.length;
  }

  getFemaleCounts() {
    const femaleCounts = users.filter((user) => {
      return user.gender == Gender.FEMALE;
    });
    return femaleCounts.length;
  }

  fetchUsersBySearchingText(searchText) {
    return users.filter((user) => {
      return user.name.includes(searchText);
    });
  }

  fetchUsersByStatus(status) {
    return users.filter((user) => {
      return user.status == status;
    });
  }

  fetchUserByGender(gender) {
    return users.filter((user) => {
      return user.gender == gender;
    });
  }

  findUserById(userId) {
    return users.find((user) => {
      return user.id == userId;
    });
  }
}
