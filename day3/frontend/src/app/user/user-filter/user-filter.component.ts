import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserGender } from "../../model/user.gender"

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
  userHierarchy = {
      userDesignation: ''
  };

  constructor() {
      this.userGender = UserGender;
  }

  ngOnInit() {
  }

  onSearchByName() {
      this.userHierarchy.userDesignation = '';
      this.userGenderValue = "";
      this.searchUser.emit(this.searchText);
  }

  onFilterByDesignation() {
      this.searchText = '';
      this.userGenderValue = "";
      this.filterByDesignation.emit(this.userHierarchy.userDesignation);
  }

  onFilterByGender(e) {
      this.userHierarchy.userDesignation = '';
      this.searchText = '';
      this.filterByGender.emit(e.target.value);
  }
}
