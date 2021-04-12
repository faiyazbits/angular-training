import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  totalProjectCount;
  scrumProjectCount;
  kanbanProjectCount;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
      this.totalProjectCount = this.projectService.getTotalProjectCount();
      this.scrumProjectCount = this.projectService.getScrumProjectCount();
      this.kanbanProjectCount = this.projectService.getKanbanProjectCount();
  }

}
