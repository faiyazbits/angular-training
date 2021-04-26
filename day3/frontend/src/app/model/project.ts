import { ProjectType } from "./project.type";
import { ProjectStatus } from "./project.status";

export interface Project {
    id: string,
    userId:number,
    name: string,
    description: string,
    owner: string,
    type: ProjectType,
    startDate: string,
    status: ProjectStatus
}
