import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  personDetails =[
    {
      id:1,
      name:"Vinoth Kumar",
      designation: "Software Trainee",
      gender: "Male",
      age: 24
 
    },{
      id:2,
      name:"Subhashini",
      designation: "Media Developer",
      gender: "Female",
      age: 25

    },{
      id:3,
      name:"Sahana",
      designation: "Clerk",
      gender: "Female",
      age: 26

    },{
      id:4,
      name:"Mohamed Umar",
      designation: "Software Developer",
      gender: "Male",
      age:27

    },{
      id:5,
      name:"Dhanu Chandran",
      designation: "Central Intelligence",
      gender: "Male",
      age: 28

    }
  ]


  constructor() { }

  getPersons() {
    return this.personDetails;
  }
}
