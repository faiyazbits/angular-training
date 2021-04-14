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
  selectedUserId = '';
  users = [
    {
      id: '1',
      name: 'James Clear',
      designation: 'Writer',
      gender: 'Male',
      age: '25'
    },
    {
      id: '2',
      name: 'Saleem Syed',
      designation: 'Engineer',
      gender: 'Male',
      age: '29'
    },
    {
      id: '3',
      name: 'Anna Clara',
      designation: 'Journalist',
      gender: 'Female',
      age: '30'
    },
    {
      id: '4',
      name: 'John Flinto',
      designation: 'Doctor',
      gender: 'Male',
      age: '33'
    },
    {
      id: '5',
      name: 'Mary Adams',
      designation: 'Lecturer',
      gender: 'Female',
      age: '23'
    }
  ]
  constructor() { }

  onUserGenderSelect(userId) {
    this.selectedUserId = userId;
  }

  getRowColor(user) {
    return user.id === this.selectedUserId ? "bisque" : "white";
  }
}
