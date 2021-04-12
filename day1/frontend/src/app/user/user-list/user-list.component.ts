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
  
  users = [
    {
      name:"Buhari",
      designation: "Software Engineer",
      gender:"male",
      age:23
    },
    {
      name:"Ithris Shabi",
      designation: "Software Engineer",
      gender:"male",
      age:35
    },
    {
      name:" Sheerin",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },
    {
      name:" Sumiaya",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },
    {
      name:" vinoth ",
      designation: "Software Engineer",
      gender:"male",
      age:35
    },
    {
      name:" Rahmath Marzooka ",
      designation: "Software Engineer",
      gender:"Female",
      age:35
    },

  ]

  constructor() {}
}
