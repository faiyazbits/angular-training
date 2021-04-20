import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {UserGender} from '../../model/user.gender';
import {UserType} from '../../model/user.type';

@Component({
    selector: 'app-user-reactiveform-add',
    templateUrl: './user-reactiveform-add.component.html',
    styleUrls: ['./user-reactiveform-add.component.css']
})
export class UserReactiveformAddComponent implements OnInit {
    userCreationForm: FormGroup;
    submitted = false;
    userGenderOptions;
    userTypeOptions;
    designations = ['Project Manager', 'Team Leader', 'Senior Software Developer', 'Project Delivery Head',
        'Project Architect', 'Project Manager'];

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
        this.userGenderOptions = UserGender;
        this.userTypeOptions = UserType;
    }

    ngOnInit() {
        this.userCreationForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(6)]],
            designation: ['', Validators.required],
            gender: ['', [Validators.required]],
            userType: ['', [Validators.required]],
            age: ['', [Validators.required]]
        });
    }

    get controls() {
        return this.userCreationForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.userCreationForm.invalid) {
            return;
        }
        this.userService.createNewUser(this.userCreationForm.value);
        this.userCreationForm.reset();
        this.router.navigateByUrl('/users');

    }

}
