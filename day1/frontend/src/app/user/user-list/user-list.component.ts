// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use user-gender component)
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
selectedUserId:string;

  users = [
    {
      id:1,
      name:"Buhari",
      designation: "Software Engineer",
      gender:"male",
      age:23
    },
    {
      id:2,
      name:"Ithris Shabi",
      designation: "Software Engineer",
      gender:"male",
      age:35
    },
    {
      id:3,
      name:" Sheerin",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },
    {
      id:4,
      name:" Sumiaya",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },
    {
      id:5,
      name:" vinoth ",
      designation: "Software Engineer",
      gender:"male",
      age:35
    },
    {
      id:6,
      name:" Rahmath Marzooka ",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },

  ]

  constructor() {}


  // Attaching the click in Parent 
  userGenderHighlight(userId) {
    this.selectedUserId = userId;
    // console.log(userId)
  }

  getColor(user) {
    return user.id === this.selectedUserId ? "beige":"white"
  }
}
