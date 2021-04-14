import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-user-gender',
    templateUrl: './user-gender.component.html',
    styleUrls: ['user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
    @Input() userGender
    @Input() userId
    @Output() selectedUserGender = new EventEmitter<any>()

    constructor() {

    }

    ngOnInit() {

    }
    onUserGenderClick() {
        this.selectedUserGender.emit(this.userId)
    }

}
