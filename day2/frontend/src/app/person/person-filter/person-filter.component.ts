import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonGender } from "../../model/person.gender"

@Component({
  selector: 'app-person-filter',
  templateUrl: './person-filter.component.html',
  styleUrls: ['./person-filter.component.css']
})
export class PersonFilterComponent implements OnInit {

  
  @Output() searchPerson = new EventEmitter<string>();
  @Output() filterByDesignation = new EventEmitter<string>();
  @Output() filterByGender = new EventEmitter<string>();

  searchText = "";
  personGenderValue = "";
  personGender;
  personHierarchy = {
    personDesignation: ''
  };

  constructor() {
      this.personGender = PersonGender;
  }

  ngOnInit() {
  }

  onSearchPerson() {
      this.personHierarchy.personDesignation = '';
      this.personGenderValue = "";
      this.searchPerson.emit(this.searchText);
  }

  onFilterByDesignation() {
      this.searchText = '';
      this.personGenderValue = "";
      this.filterByDesignation.emit(this.personHierarchy.personDesignation);
  }

  onFilterByGender(e) {
      this.personHierarchy.personDesignation = '';
      this.searchText = '';
      this.filterByGender.emit(e.target.value);
  }
}