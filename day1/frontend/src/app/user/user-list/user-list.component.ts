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
            name: 'mohamed',
            designation: 'B.E',
            gender: 'male',
            age: 35
        },
        {
            name: 'gopi',
            designation: 'MCA',
            gender: 'male',
            age: 28
        },
        {
            name: 'mani',
            designation: 'MA',
            gender: 'male',
            age: 25
        },
        {
            name: 'salma',
            designation: 'BE',
            gender: 'female',
            age: 23
        },
    ]

    constructor() {
    }
}
