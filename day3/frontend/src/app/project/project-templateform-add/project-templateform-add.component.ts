import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-templateform-add',
  templateUrl: './project-templateform-add.component.html',
  styleUrls: ['./project-templateform-add.component.css']
})
export class ProjectTemplateformAddComponent {

    model: any = {};

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }

}
