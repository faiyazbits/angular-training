import { Person } from '../../model/person';
import { PersonService } from '../person.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthguardService } from 'src/app/auth-guard/auth.services';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrls: ['./person-dashboard.component.css']
})
export class PersonDashboardComponent implements OnInit {
  persons: Person[];
  selectedPerson: Person;

  constructor(private authguardService: AuthguardService, private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.persons = this.personService.getPersonList();
    this.selectedPerson = this.persons[0];
  }
   
  onPersonSelect(person: Person) {
    this.selectedPerson = person;
  }
  
  logout() {
    this.authguardService.logout();
    this.router.navigateByUrl('/login');
}

}



