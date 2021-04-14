import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Gender } from "../../model/user.gender";

@Component({
  selector: "app-user-filter",
  templateUrl: "./user-filter.component.html",
  styleUrls: ["./user-filter.component.css"],
})
export class UserFilterComponent implements OnInit {
  
  @Output() searchName = new EventEmitter<string>();
  @Output() filteringByGender = new EventEmitter<string>();
  @Output() filteringByStatus = new EventEmitter<string>();
  

  searchUser = "";
  userGenderValue = "";
  userGender;
  // WHY WE MAKING IT IN OBJ.....?
  statusView = {
    userStatus: "",
  };

  constructor() {
    this.userGender = Gender;
  }

  ngOnInit() {}

  onSearchByName() {
    this.statusView.userStatus = "";
    this.userGenderValue = "";
    this.searchName.emit(this.searchUser);
  }

  filterByGender(e) {
    this.statusView.userStatus="";
    this.searchUser = "";
    this.filteringByGender.emit(e.target.value);
  }

  filterByStatus() {
    this.searchUser = "";
    this.userGenderValue ="";
    this.filteringByStatus.emit(this.statusView.userStatus);
  }
}
