// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use user-gender component)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selectedUserId = '';
  usersListDisplay: boolean;
  usersColumnDisplay: boolean;

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
    },
    {
      id: '5',
      name: 'Anna Clar',
      designation: 'Lecturer',
      gender: 'Female',
      age: '23'
    },
    {
      id: '5',
      name: 'Saleem Sayed',
      designation: 'Lecturer',
      gender: 'Female',
      age: '23'
    },
    {
      id: '5',
      name: 'Prakash Kumar',
      designation: 'Lecturer',
      gender: 'Female',
      age: '23'
    },

  ]
  ngOnInit() {
    this.usersListDisplay = true;
  }
  constructor() { }

  onUserGenderSelect(userId) {
    this.selectedUserId = userId;
  }

  getRowColor(user) {
    return user.id === this.selectedUserId ? "bisque" : "white";
  }
  displayAsLists(button) {
    this.usersListDisplay = true;
    this.usersColumnDisplay = false;
  }
  displayAsColumns(button) {
    this.usersListDisplay = false;
    this.usersColumnDisplay = true;
  }
}
