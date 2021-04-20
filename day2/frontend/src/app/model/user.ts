import { userGender } from './user.gender'

export interface User {
    id: number,
    name: string,
    age: number,
    gender: userGender,
    designation: string
}