import { Injectable } from '@angular/core';
import { Person } from '../model/person'
import { PersonGender } from '../model/person.gender'

const persons = [
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
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  selectedPerson: Person ;

  constructor() { }

  getPersonList() {
    return persons;
  }
  getTotalPersonCount() {
    return persons.length;
  }

  getFemalePersonCount() {
    const femalePersons = persons.filter((person) => {
      return person.gender == PersonGender.FEMALE
    });
    return femalePersons.length;
  }

  getMalePersonCount() {
    const malePersons = persons.filter((person) => {
      return person.gender == PersonGender.MALE
    });
    return malePersons.length;
  }

  fetchPersonsBySearchText(searchText) {
    return persons.filter((person) => {
        return person.name.includes(searchText);
    });
}

fetchPersonsByDesignation(designation) {
    return persons.filter((person) => {
        return person.designation == designation;
    });
}

fetchPersonsByGender(gender) {
    return persons.filter((person) => {
        return person.gender == gender;
    });
}
  
}