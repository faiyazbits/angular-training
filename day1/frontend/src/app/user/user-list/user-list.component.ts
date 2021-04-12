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
      name: 'sheerin',
      designation: 'Software Trainee',
      gender: 'female',
      age: 28
    },
    {
      name: 'umar farook',
      designation: 'Senior Software Developer',
      gender: 'male',
      age: 31
    },
    {
      name: 'marzooka',
      designation: 'Software Trainee',
      gender: 'female',
      age: 25
    },
    {
      name: 'buhari',
      designation: 'Software Trainee',
      gender: 'male',
      age: 23
    }
  ];
  constructor() {}
}
