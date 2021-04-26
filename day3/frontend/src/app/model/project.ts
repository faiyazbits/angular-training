import { ProjectType } from "./project.type";
import { ProjectStatus } from "./project.status";

export interface Project {
    id: string,
    name: string,
    description: string,
    owner: string,
    userId: number,
    type: ProjectType,
    startDate: string,
    status: ProjectStatus
}