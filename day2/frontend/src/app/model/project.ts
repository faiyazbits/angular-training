import { ProjectType } from "./project.type";
import { ProjectStatus } from "./project.status";

export interface Project {
    id: number,
    name: string,
    description: string,
    userId: number,
    owner: string,
    type: ProjectType,
    startDate: string,
    status: ProjectStatus
}