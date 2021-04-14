import {UserStatus} from "./user.status";
import {UserType} from "./user.type";

export interface User {
    id: number,
    name: string,
    age: number,
    designation: string,
    gender: UserType,
    status: UserStatus
}
