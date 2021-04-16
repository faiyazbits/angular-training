import { Router } from '@angular/router';
import { UserGender } from './../../model/user.gender';
import { UserService } from './../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reactiveform-add',
  templateUrl: './user-reactiveform-add.component.html',
  styleUrls: ['./user-reactiveform-add.component.css']
})
export class UserReactiveformAddComponent implements OnInit {
  userCreationForm: FormGroup;
  submitted = false;
  userGenderOptions;
  designations = ['Team Leader', 'Project Manager', 'Project Architect', 'Project Delivery Head'];
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userGenderOptions = UserGender;
  }

  ngOnInit() {
    this.userCreationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      designation: ['', Validators.required],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    });
  }
  get controls() { return this.userCreationForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userCreationForm.invalid) {
      return;
    }

     let newUser = {...this.userCreationForm.value, id: this.generateId()};
     this.userService.createNewUser(newUser);
     this.userCreationForm.reset();
     this.router.navigateByUrl('/users');

  }
  generateId() {
    return Math.floor(Math.random() * 100);
  }
}
