import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-person-summary',
  templateUrl: './person-summary.component.html',
  styleUrls: ['./person-summary.component.css']
})
export class PersonSummaryComponent implements OnInit {
  totalPersonCount;
  malePersonCount;
  femalePersonCount;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.totalPersonCount = this.personService.getTotalPersonCount();
    this.femalePersonCount = this.personService.getFemalePersonCount();
    this.malePersonCount = this.personService.getMalePersonCount();
  }

}