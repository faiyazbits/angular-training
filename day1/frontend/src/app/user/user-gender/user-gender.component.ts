import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector: 'app-user-gender',
    templateUrl: './user-gender.component.html',
    styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
    @Output() newItemEvent = new EventEmitter<string>();

    @Input() userGender;

    constructor() {
    }

    ngOnInit() {
    }

    addNewItem() {
        this.newItemEvent.emit();
    }

}
