import { PersonService } from '../person.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../model/person'



@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  selectedPersonId: number;
  persons:any=[];

  @Input() selectedPerson;
  @Output() personSelected = new EventEmitter<Person>();
   

  constructor(private PersonServices : PersonService) {
    this.persons=this.PersonServices.getPersonList();
  }
  ngOnInit(){
    
  }
  onPersonSelector(personId) {
    this.selectedPersonId=personId;
  }
  onPersonClick(person) {
    this.personSelected.emit(person);
}
  onSearchByName(searchTerm) {
    this.persons = this.PersonServices.fetchPersonsBySearchText(searchTerm);
    this.personSelected.emit(this.persons[0]);
}

onFilterByDesignation(designation){
    if(designation=='all'){
        this.persons = this.PersonServices.getPersonList();
        this.personSelected.emit(this.persons[0]);
        return;
    }
    this.persons = this.PersonServices.fetchPersonsByDesignation(designation);
    this.personSelected.emit(this.persons[0]);
}

onFilterByGender(gender){
    this.persons = this.PersonServices.fetchPersonsByGender(gender);
    this.personSelected.emit(this.persons[0]);
}


 
  getRowColor(person){
return person.id===this.selectedPersonId ? "teal":"white"
  }
  
}