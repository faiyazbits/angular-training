import { UserGender } from "./user.gender"

export interface User {
    id: number,
    name: string,
    designation: string,
    gender: UserGender,
    age: number,
    salary: number
}