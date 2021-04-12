import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: [ './project-type.component.css' ]
})
export class ProjectTypeComponent implements OnInit {

  @Input() projectType;

  constructor() {
  }

  ngOnInit() {

  }

}
