// user should have 4 attributes name,designation,gender,age;
// name should be capitalized when rendered
// gender should be an icon (use ng  component)
import {Component} from '@angular/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    users = [
        {
            name: 'umar',
            designation: 'Senior Software Developer',
            gender: 'male',
            age: 35
        },
        {
            name: 'gopi',
            designation: 'Senior Software Developer',
            gender: 'male',
            age: 28
        },
        {
            name: 'mani',
            designation: 'Ui Developer',
            gender: 'male',
            age: 25
        },
        {
            name: 'salma',
            designation: 'Software Developer',
            gender: 'female',
            age: 23
        },
    ];

    constructor() {
    }

    receivedItem() {

    }
}
