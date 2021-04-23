import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-templateform-add',
    templateUrl: './user-templateform-add.component.html',
    styleUrls: ['./user-templateform-add.component.html']
})
export class UserTemplateformAddComponent {

    model: any = {};

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }

}