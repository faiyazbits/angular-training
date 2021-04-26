// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use user-gender component)

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    {
      id: 1,
      name: 'John Watson',
      designation: 'Project Manager',
      gender: 'male'
    },
    {
      id: 2,
      name: 'Raja Sekar',
      designation: 'Team Leader',
      gender: 'male'
    },
    {
      id: 3,
      name: 'Preethi Chawla',
      designation: 'Project Manager',
      gender: 'female'
    },
    {
      id: 4,
      name: 'Ashraf',
      designation: 'Project Delivery Head',
      gender: 'male'
    },
    {
      id: 5,
      name: 'John Watson',
      designation: 'Project Architect',
      gender: 'male'
    },
    {
      id: 6,
      name: 'Emma Tom',
      designation: 'Project Manager',
      gender: 'female'
    },
    {
      id: 7,
      name: 'Nick',
      designation: 'Team Leader',
      gender: 'male'
    }
  ];
  constructor() {}
  ngOnInit() {}
}
