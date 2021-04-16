import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProjectType } from "../../model/project.type";

@Component({
    selector: 'app-project-filter',
    templateUrl: './project-filter.component.html',
    styleUrls: ['./project-filter.component.css']
})
export class ProjectFilterComponent implements OnInit {

    @Output() searchProject = new EventEmitter<string>();
    @Output() filterByStatus = new EventEmitter<string>();
    @Output() filterByType = new EventEmitter<string>();

    searchText = "";
    projectTypeValue = "";
    projectType;
    statusModel = {
        projectStatus: ''
    };

    constructor() {
        this.projectType = ProjectType;
    }

    ngOnInit() {
    }

    onSearchByName() {
        this.statusModel.projectStatus = '';
        this.projectTypeValue = "";
        this.searchProject.emit(this.searchText);
    }

    onFilterByStatus() {
        this.searchText = '';
        this.projectTypeValue = "";
        this.filterByStatus.emit(this.statusModel.projectStatus);
    }

    onFilterByType(e) {
        this.statusModel.projectStatus = '';
        this.searchText = '';
        this.filterByType.emit(e.target.value);
    }


}
