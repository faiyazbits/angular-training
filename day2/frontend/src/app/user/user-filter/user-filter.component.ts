import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserType} from '../../model/user.type';


@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html',
    styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {
    @Output() searchUser = new EventEmitter<string>();
    @Output() filterByGender = new EventEmitter<string>();
    @Output() filterByType = new EventEmitter<string>();
    searchText = '';
    userTypeValue = '';
    userType;
    genderStatusModel = {
        genderStatus: ''
    };

    constructor() {
        this.userType = UserType;
    }

    ngOnInit() {
    }

    onSearchByName() {
        this.userTypeValue = '';
        this.searchUser.emit(this.searchText);
    }

    onFilterByType(e) {
        this.userTypeValue = '';
        this.filterByType.emit(e.target.value);
    }

    onFilterByGender() {
        this.searchText = '';
        this.userTypeValue = '';
        this.filterByGender.emit(this.genderStatusModel.genderStatus);
    }
}