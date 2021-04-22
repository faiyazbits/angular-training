import { Component} from '@angular/core';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent {
  selectedPersonId: number;
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
    

  constructor() {}
  ngOnInit(){

  }
  onPersonSelector(personId) {
    this.selectedPersonId=personId;
  }
  getRowColor(person){
return person.id===this.selectedPersonId ? "teal":"white"
  }
  
}