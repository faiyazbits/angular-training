import {Injectable} from '@angular/core';
import {Project} from "../model/project";
import {ProjectType} from "../model/project.type";
import {ProjectStatus} from "../model/project.status";

const projects: Project[] = [
    {
        id: '1',
        userId: 1,
        name: 'stock ticker',
        description: 'stock ticker app frontend in angular',
        owner: 'John Watson',
        type: ProjectType.SCRUM,
        startDate: '10-Sep-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '2',
        userId: 1,
        name: 'stock ticker api',
        description: 'stock ticker app api in express.js',
        owner: 'John Watson',
        type: ProjectType.SCRUM,
        startDate: '01-Jan-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '3',
        userId: 2,
        name: 'stock ticker api',
        description: 'stock ticker app api in express.js',
        owner: 'Raja Sekar',
        type: ProjectType.SCRUM,
        startDate: '01-Jan-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '3',
        userId: 2,
        name: 'chartiq reports',
        description: 'reports application in react and chartiq',
        owner: 'Raja Sekar',
        type: ProjectType.KANBAN,
        startDate: '20-May-2019',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '4',
        userId: 3,
        name: 'chartiq reports',
        description: 'reports application in react and chartiq',
        owner: 'Preethi Chawla',
        type: ProjectType.KANBAN,
        startDate: '20-May-2019',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '5',
        userId: 3,
        name: 'chartiq reports',
        description: 'reports application in react and chartiq',
        owner: 'Preethi Chawla',
        type: ProjectType.KANBAN,
        startDate: '20-May-2019',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '6',
        userId: 4,
        name: 'fullstack Developer ',
        description: 'project management application in angular',
        owner: 'David',
        type: ProjectType.KANBAN,
        startDate: '10-Apr-2018',
        status: ProjectStatus.IN_PROGRESS
    },
    {
        id: '7',
        userId: 4,
        name: 'fullstack java',
        description: 'project management application in java and angular',
        owner: 'Ashraf',
        type: ProjectType.KANBAN,
        startDate: '10-Apr-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '8',
        userId: 5,
        name: 'digitall school',
        description: 'project management application in microservices',
        owner: 'John Mical',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '9',
        userId: 5,
        name: 'ppm',
        description: 'project management application in microservices',
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '10',
        userId: 6,
        name: 'node',
        description: 'project management application in softWere',
        owner: 'Emma Tom',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '11',
        userId: 6,
        name: 'java',
        description: 'project management application in SpringBoot',
        owner: 'Priyanka',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '11',
        userId: 7,
        name: 'angular',
        description: 'project management application in Angular',
        owner: 'Chawla',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
    {
        id: '12',
        userId: 7,
        name: 'React',
        description: 'project management application in React',
        owner: 'Nick',
        type: ProjectType.SCRUM,
        startDate: '23-Dec-2018',
        status: ProjectStatus.COMPLETED
    },
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

    filterProjectByUserId(userId) {
        return projects.filter((project) => {
            return project.userId == userId;
        });
    }
}
