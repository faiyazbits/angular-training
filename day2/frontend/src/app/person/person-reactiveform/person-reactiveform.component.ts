import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonGender } from '../../model/person.gender';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-person-person-reactiveform',
  templateUrl: './person-reactiveform.component.html',
  styleUrls: ['./person-reactiveform.component.css']
})
export class PersonReactiveformComponent implements OnInit {

    personDetailsForm: FormGroup;
    submitted = false;
    personGenderOptions;
    selectedPersonId: number;
  persons:any=[];
    
    @Input() selectedPerson;
    @Output() personSelected = new EventEmitter<Person>();

    constructor(private formBuilder: FormBuilder, private personService: PersonService, private router: Router) {
        this.personGenderOptions = PersonGender;
        this.persons = this.personService.getPersonList();
    }

    ngOnInit() {
        this.personDetailsForm = this.formBuilder.group({

            name: ['', [Validators.required, Validators.minLength(3)]],
            designation: ['', Validators.required],
            gender: ['', [Validators.required]],
            age: ['', [Validators.required]]
        });

       
    }
    
    
    get controls() { return this.personDetailsForm.controls; }

    onPersonSelector(personId) {
        this.selectedPersonId=personId;
      }

        

    onSubmit() {
        let personObj = {
            id: this.persons.length+1,
            name:this.personDetailsForm.value.name,
            designation:this.personDetailsForm.value.designation,
            gender:this.personDetailsForm.value.gender,
            age:this.personDetailsForm.value.age
        }
        this.submitted = true;
        this.personService.addPerson(personObj)

        
        if (this.personDetailsForm.invalid) {
            return;
        }

        
        this.router.navigate(['/persons']);
        
    }
    
}