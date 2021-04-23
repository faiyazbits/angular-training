import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { userGender } from "../../model/user.gender"

@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html',
    styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {


    @Output() searchUser = new EventEmitter<string>();
    @Output() filterByDesignation = new EventEmitter<string>();
    @Output() filterByGender = new EventEmitter<string>();

    searchText = "";
    userGenderValue = "";
    userGender;
    userDesignationHierarchy = {
        userDesignation: ''
    };

    constructor() {
        this.userGender = userGender;
    }

    ngOnInit() {
    }

    onSearchByName() {
        this.userDesignationHierarchy.userDesignation = '';
        this.userGenderValue = "";
        this.searchUser.emit(this.searchText);
    }

    onFilterByDesignation() {
        this.searchText = '';
        this.userGenderValue = "";
        this.filterByDesignation.emit(this.userDesignationHierarchy.userDesignation);
    }

    onFilterByGender(e) {
        this.userDesignationHierarchy.userDesignation = '';
        this.searchText = '';
        this.filterByGender.emit(e.target.value);
    }
}