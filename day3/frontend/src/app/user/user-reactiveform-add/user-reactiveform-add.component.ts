import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { userGender } from 'src/app/model/user.gender';
import { ProjectType } from "../../model/project.type";
import { UserService } from "../../user/user.service";
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'user-reactiveform-add',
    templateUrl: './user-reactiveform-add.component.html',
    styleUrls: ['./user-reactiveform-add.component.css']
})
export class UserReactiveformAddComponent implements OnInit {

    userCreationForm: FormGroup;
    submitted = false;
    userGenderOptions;
    userOptions;


    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
        this.userGenderOptions = userGender;
        this.userOptions = this.userService.getUserList();
    }

    ngOnInit() {
        this.userCreationForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            designation: ['', Validators.required],
            gender: ['', [Validators.required]],
            age: ['', [Validators.required]]
        });

    }

    // convenience getter for easy access to form fields
    get controls() { return this.userCreationForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userCreationForm.invalid) {
            return;
        }


        let newUser = this.userCreationForm.value;
        this.userService.addUserFromReactiveForm(newUser);

        this.navigateToUserDashboard();
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userCreationForm.value)}
    navigateToUserDashboard() {
        this.router.navigate(['/users']);
    }
}
