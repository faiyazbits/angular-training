import { UserStatus } from './user.status';
import { Gender } from './user.gender'



export interface User {
    id:number,
    name: string,
    designation: String,

    
    gender: Gender,
    status: UserStatus
}