import {UserStatus} from "./user.status";
import {UserType} from "./user.type";
import {UserGender} from "./user.gender";

export interface User {
    id: number | string,
    name: string,
    age: number,
    designation: string,
    gender: UserGender,
    status: UserStatus,
    type: UserType
}
