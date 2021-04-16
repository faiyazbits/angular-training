import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from "../user/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;


    constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() {
        return this.loginForm.controls;
    }

    login() {
        if (this.authenticationService.login(this.loginForm.value)) {
            this.router.navigateByUrl('/users');
        } else {
            this.loginForm.reset();
            this.router.navigateByUrl('/login');
        }

    }
}
