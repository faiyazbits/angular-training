import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { UserService } from './../user.service';
import { User } from '../../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserGender } from './../../model/user.gender';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  designations = ['Team Leader', 'Project Manager', 'Project Architect', 'Project Delivery Head'];
  submitted = false;
  userGenderOptions;
  userUpdationForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.userGenderOptions = UserGender;
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.user = this.userService.findUserById(id);

      this.userUpdationForm = this.formBuilder.group({
        name: [this.user && this.user.name, [Validators.required, Validators.minLength(6)]],
        designation: [this.user && this.user.designation, Validators.required],
        gender: [this.user && this.user.gender, [Validators.required]],
        age: [this.user && this.user.age, [Validators.required]],
        salary: [this.user && this.user.salary, [Validators.required]]
      });
    })
  }
  get controls() { return this.userUpdationForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userUpdationForm.invalid) {
      return;
    }
    const userToBeUpdated = {...this.userUpdationForm.value, id:this.user.id};
    console.log(userToBeUpdated);
    this.userService.updateUser(userToBeUpdated);
    this.userUpdationForm.reset();
    this.router.navigateByUrl('/users');
  }
  
}
