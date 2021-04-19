import { Injectable } from '@angular/core';
import { Project } from "../model/project";
import { ProjectType } from "../model/project.type";
import { ProjectStatus } from "../model/project.status";

const projects: Project[] = [
    {
        id: '1',
        name: 'stock ticker',
        description: 'stock ticker app frontend in angular',
        owner: 'John Watson',
        type: ProjectType.SCRUM,
        startDate: '10-Sep-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '2',
        name: 'stock ticker api',
        description: 'stock ticker app api in express.js',
        owner: 'Raja Sekar',
        type: ProjectType.SCRUM,
        startDate: '01-Jan-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '3',
        name: 'chartiq reports',
        description: 'reports application in react and chartiq',
        owner: 'Preethi Chawla',
        type: ProjectType.KANBAN,
        startDate: '20-May-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '4',
        name: 'digitall fullstack java',
        description: 'project management application in java and angular',
        owner: 'David',
        type: ProjectType.KANBAN,
        startDate: '10-Apr-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '5',
        name: 'digitall microservices',
        description: 'project management application in microservices',
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    }
];

@Injectable()
export class ProjectService {

    selectedProject: Project = projects[0];

    constructor() {
    }

    getProjectList() {
        return projects;
    }

    getTotalProjectCount() {
        return projects.length;
    }

    getScrumProjectCount() {
        const scrumProjects = projects.filter((project) => {
            return project.type == ProjectType.SCRUM;
        });
        return scrumProjects.length;
    }

    getKanbanProjectCount() {
        const kanbanProjects = projects.filter((project) => {
            return project.type == ProjectType.KANBAN;
        });
        return kanbanProjects.length;
    }

    fetchProjectsBySearchText(searchText) {
        return projects.filter((project) => {
            return project.name.includes(searchText);
        });
    }

    fetchProjectsByProjectStatus(status) {
        return projects.filter((project) => {
            return project.status == status;
        });
    }

    fetchProjectsByProjectType(type) {
        return projects.filter((project) => {
            return project.type == type;
        });
    }

    getProjectById(projectId: string): Project {
        return projects.find((project) => {
            return project.id == projectId
        });
    }
}
