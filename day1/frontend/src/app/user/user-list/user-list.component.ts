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

  userList = [ {
    name: "jasmin",
    designation: "developer",
    gender: "female",
    age: 23
  },
  {
    name: "rizwan",
    designation: "manager",
    gender: "male",
    age: 28
  },
  {
    name: "sumaiya",
    designation: "trainee",
    gender: "female",
    age: 25
  },
  {
    name: "afrin",
    designation: "developer",
    gender: "female",
    age: 20
  }];

  constructor() {}
}
