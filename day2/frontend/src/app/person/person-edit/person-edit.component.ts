import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PersonService } from '../person.service';
import { PersonGender } from '../../model/person.gender';
import { Person } from '../../model/person';

@Component({
  selector: 'app-user-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  personName: Person;
  designations = ['Software Trainee', 'Media Developer', 'Clerk', 'Software Developer', 'Central Intelligence'];
  submitted = false;
  personGenderOptions;
  personUpdationForm: FormGroup;
    person: any;

  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router, private formBuilder: FormBuilder) {
    this.personGenderOptions = PersonGender;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.person = this.personService.findPersonById(id);

      this.personUpdationForm = this.formBuilder.group({
        name: [this.person && this.person.name, [Validators.required, Validators.minLength(3)]],
        designation: [this.person && this.person.designation, Validators.required],
        gender: [this.person && this.person.gender, [Validators.required]],
        age: [this.person && this.person.age, [Validators.required]],
        
      });
    })
  }
  get controls() { return this.personUpdationForm.controls; }
  onSubmit() {
    this.submitted = true;

   
    if (this.personUpdationForm.invalid) {
      return;
    }
    const personToBeUpdated = {...this.personUpdationForm.value, id:this.person.id};
    console.log(personToBeUpdated);
    this.personService.updatePerson(personToBeUpdated);
    this.personUpdationForm.reset();
    this.router.navigateByUrl('/persons');
  }
  
}