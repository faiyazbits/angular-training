import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthguardService } from '../auth-guard/auth.services';
import { PersonService } from '../person/person.service';






@Component({
    selector: 'app-user-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email:string;
    password:string;
    userLoginForm: FormGroup;
    submitted = false;

    

    constructor(private formBuilder: FormBuilder, private authguardService:AuthguardService, private personService: PersonService, private router: Router) {
     
  }

  ngOnInit() {
      this.userLoginForm = this.formBuilder.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required, Validators.minLength(6)]]

      });
  }
get formControls(){
  return this.userLoginForm.controls
}

  onSubmit() {
      this.submitted = true;
      
      if (this.userLoginForm.invalid) {
console.log("invalid User")
          return;
      }
      if
        (this.authguardService.login(this.userLoginForm.value)) {
          this.router.navigate(['/persons']);
          console.log("Login successfully")
      }
      else{
        this.submitted = false;
            this.userLoginForm.reset();
            this.router.navigate(['/login']);
            console.log("user not found and reload to login page")
      }
    }
  
}