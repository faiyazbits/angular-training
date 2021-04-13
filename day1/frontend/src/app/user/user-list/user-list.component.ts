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

  userDetails =[
    {
      name:"Vinoth Kumar",
      designation: "Software Trainee",
      gender: "Male",
      age: 24

    },{
      name:"Subhashini",
      designation: "Media Developer",
      gender: "Female",
      age: 25

    },{
      name:"Sahana",
      designation: "Probationary Officer",
      gender: "Female",
      age: 26

    },{
      name:"Mohamed Umar",
      designation: "Software Developer",
      gender: "Male",
      age:27

    },{
      name:"Dhanu Chandran",
      designation: "Central Intelligence",
      gender: "Male",
      age: 28

    }
  ]
  constructor() {}
}
