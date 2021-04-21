import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../user/user.service";
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    userLoginForm: FormGroup;
    submitted = false;
    userOptions;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
        this.userOptions = this.userService.getUserList();
    }

    ngOnInit() {
        this.userLoginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]

        });
    }


    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.userLoginForm.invalid) {
            return;
        }
        let userLoginDetails = this.userLoginForm.value;
        let userLoginToken: string = this.getUserLoginToken(userLoginDetails)
        localStorage.setItem('userLoginToken', userLoginToken)
        this.navigateToUserList()

    }
    getUserLoginToken(userLoginDetails) {
        return 'user logged in'
    }
    navigateToUserList() {
        this.router.navigate(['/users'])
    }

}

