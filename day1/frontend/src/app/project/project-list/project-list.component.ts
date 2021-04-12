import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = [
    {
      id: '1',
      name: 'stock ticker',
      description: 'stock ticker app frontend in angular',
      owner: 'John Watson',
      type: 'scrum'
    },
    {
      id: '2',
      name: 'stock ticker api',
      description: 'stock ticker app api in express.js',
      owner: 'Raja Sekar',
      type: 'scrum'
    },
    {
      id: '3',
      name: 'chartiq reports',
      description: 'reports application in react and chartiq',
      owner: 'Preethi Chawla',
      type: 'kanban'
    },
    {
      id: '4',
      name: 'provility fullstack java',
      description: 'project management application in java and angular',
      owner: 'john',
      type: 'kanban'
    },
    {
      id: '5',
      name: 'provility microservices',
      description: 'project management application in microservices',
      owner: 'priyanka',
      type: 'scrum'
    }
  ];

  constructor() {}
}
