import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-type',
  templateUrl: './project-type.component.html',
  styleUrls: [ './project-type.component.css' ]
})
export class ProjectTypeComponent implements OnInit {

  @Input() projectType;
  @Input() projectId;
  @Output() projectSelected = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  onProjectTypeClick(){
    this.projectSelected.emit(this.projectId);
  }

}
