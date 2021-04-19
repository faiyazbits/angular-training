import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from "../../model/project";
import { Router } from '@angular/router';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

    projects: Project[] = [];

    @Input() selectedProject;

    @Output() projectSelected = new EventEmitter<Project>();

    constructor(private projectService: ProjectService, private router: Router) {
        this.projects = this.projectService.getProjectList();
    }

    onProjectClick(id) {
        this.router.navigate(['/project-detail', id]);
    }

    getActiveProjectClass(project) {
        return project.id == this.selectedProject.id;
    }

    onSearchProject(searchTerm) {
        this.projects = this.projectService.fetchProjectsBySearchText(searchTerm);
        this.projectSelected.emit(this.projects[0]);
    }

    onFilterByProjectStatus(status) {
        if (status == 'all') {
            this.projects = this.projectService.getProjectList();
            this.projectSelected.emit(this.projects[0]);
            return;
        }
        this.projects = this.projectService.fetchProjectsByProjectStatus(status);
        this.projectSelected.emit(this.projects[0]);
    }

    onFilterByProjectType(type) {
        this.projects = this.projectService.fetchProjectsByProjectType(type);
        this.projectSelected.emit(this.projects[0]);
    }

}
