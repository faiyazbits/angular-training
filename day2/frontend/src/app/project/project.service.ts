import { Injectable } from '@angular/core';
import { Project } from "../model/project";
import { ProjectType } from "../model/project.type";
import { ProjectStatus } from "../model/project.status";

const projects: Project[] = [
    {
        id: 1,
        name: 'stock ticker',
        description: 'stock ticker app frontend in angular',
        userId :1,
        owner: 'John Watson',
        type: ProjectType.SCRUM,
        startDate: '10-Sep-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: 2,
        name: 'stock api',
        description: 'stock ticker app api in express.js',
        userId:2,
        owner: 'Raja Sekar',
        type: ProjectType.SCRUM,
        startDate: '01-Jan-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: 3,
        name: 'chartiq reports',
        description: 'reports application in react and chartiq',
        userId:10 ,
        owner: 'Preethi Chawla',
        type: ProjectType.KANBAN,
        startDate: '20-May-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: 4,
        name: 'fullstack java',
        description: 'project management application in java and angular',
        userId:1, 
        owner: 'David',
        type: ProjectType.KANBAN,
        startDate: '10-Apr-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 5,
        name: 'microservices',
        description: 'project management application in microservices',
        userId:5, 
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 6,
        name: 'Food App',
        description: ' application in microservices',
        userId:10, 
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 7,
        name: 'CRM',
        description: ' application in mangemenst Services',
        userId:3,
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 8,
        name: 'Cargo App',
        description: ' application in logistics',
        userId:8, 
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 9,
        name: 'Food App',
        description: ' application in hotel industry',
        userId:4, 
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: 10,
        name: 'Bike App',
        description: ' application in travel ',
        userId:3,
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    }
];

@Injectable()
export class ProjectService {

    selectedProject: Project = projects[ 0 ];

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
    filteringProjectsByUserId(userId) {
        return projects.filter((project) => {
            return project.userId == userId;
        })
    }
    // filteringProjectsByUserId(userId) {
    //     return projects.some((project) => {
    //         return project.userId == userId;

    //     })
    // }
}
