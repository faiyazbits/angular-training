 import { Component, OnInit, Input } from '@angular/core';
import {UserGender} from "../../model/user.gender";

@Component({
  selector: 'app-user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
  @Input() gender;
  constructor() {}

  ngOnInit() {}

  isMaleUser() {
  return this.gender === UserGender.MALE;
  }
  isFemaleUser() {
    return this.gender === UserGender.FEMALE;
  }
}