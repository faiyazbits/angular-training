import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector: 'app-user-gender',
    templateUrl: './user-gender.component.html',
    styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
    @Output() userIdSelectionEvent = new EventEmitter<any>();

    @Input() userGender;
    @Input() userId;

    constructor() {
    }

    ngOnInit() {
    }

    onUserGenderSelectionClick() {
        this.userIdSelectionEvent.emit(this.userId);
    }

}
