import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProjectType } from "../../model/project.type";
import { UserService } from "../../user/user.service";

@Component({
  selector: 'app-project-reactiveform-add',
  templateUrl: './project-reactiveform-add.component.html',
  styleUrls: ['./project-reactiveform-add.component.css']
})
export class ProjectReactiveformAddComponent implements OnInit {

    projectCreationForm: FormGroup; 
    submitted = false;
    projectTypeOptions;
    userOptions;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.projectTypeOptions = ProjectType;
        this.userOptions = this.userService.getUserList();
    }

    ngOnInit() {
        this.projectCreationForm = this.formBuilder.group({
            projectName: ['', [Validators.required, Validators.minLength(6)]],
            projectDescription: ['', Validators.required],
            projectType: ['', [Validators.required]],
            projectOwner: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get controls() { return this.projectCreationForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.projectCreationForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.projectCreationForm.value))
    }

}
