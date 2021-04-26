import { Person } from '../../model/person';
import { PersonService } from '../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.css']
})
export class PersonDashboardComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPersonList();
    this.selectedPerson = this.persons[0];
  }
   
  onPersonSelect(person: Person) {
    this.selectedPerson = person;
  }
}