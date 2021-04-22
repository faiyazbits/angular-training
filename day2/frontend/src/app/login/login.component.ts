import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  submitted = false;
  projectCreationForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectCreationForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
    });
  }

  get controls() { return this.projectCreationForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.projectCreationForm.invalid) {
      return;
    }

    let loginData = this.projectCreationForm.value;
    let token: string = this.getToken(loginData);
    localStorage.setItem('token', token);

    this.navigateToProjectList();
  }

  getToken(loginData): string {
    return "xxyyzz";
  }

  navigateToProjectList() {
    this.router.navigate(['/projects']);
  }

}
