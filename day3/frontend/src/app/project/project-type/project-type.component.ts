import { Component, Input, OnInit } from '@angular/core';
import { ProjectType } from "../../model/project.type";

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

  isKanbanProject(){
    return this.projectType==ProjectType.KANBAN
  }

  isScrumProject(){
      return this.projectType==ProjectType.SCRUM
  }

}
