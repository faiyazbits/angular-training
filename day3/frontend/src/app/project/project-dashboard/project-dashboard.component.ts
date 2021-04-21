import { Component, OnInit } from '@angular/core';
import { Project } from "../../model/project";
import { ProjectService } from "../project.service";

@Component({
    selector: 'app-project-dashboard',
    templateUrl: './project-dashboard.component.html',
    styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {

    projects: Project[];
    selectedProject: Project;

    constructor(private projectService: ProjectService) {
    }

    ngOnInit() {
        this.projects = this.projectService.getProjectList();
        this.selectedProject = this.projects[0];
    }

    onProjectSelect(project: Project) {
        this.selectedProject = project;
    }
}
