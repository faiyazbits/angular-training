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
  selectedUserId: number;

  userDetails =[
    {
      id:1,
      name:"Vinoth Kumar",
      designation: "Software Trainee",
      gender: "Male",
      age: 24
 
    },{
      id:2,
      name:"Subhashini",
      designation: "Media Developer",
      gender: "Female",
      age: 25

    },{
      id:3,
      name:"Sahana",
      designation: "Probationary Officer",
      gender: "Female",
      age: 26

    },{
      id:4,
      name:"Mohamed Umar",
      designation: "Software Developer",
      gender: "Male",
      age:27

    },{
      id:5,
      name:"Dhanu Chandran",
      designation: "Central Intelligence",
      gender: "Male",
      age: 28

    }
  ]
  constructor() { }

  onUserSelected(userId) {
    this.selectedUserId = userId;
  }
}
