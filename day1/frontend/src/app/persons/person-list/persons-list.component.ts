import { PersonService } from '../../person.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  selectedPersonId: number;
  persons:any=[];
   

  constructor(private PersonServices : PersonService) {}
  ngOnInit(){
    this.persons=this.PersonServices.getPersons()
  }


  onPersonSelector(personId) {
    this.selectedPersonId=personId;
  }
  getRowColor(person){
return person.id===this.selectedPersonId ? "teal":"white"
  }
  
}