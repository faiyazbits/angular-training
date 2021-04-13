import { UserGender } from './../../model/user.gender';
import { User } from '../../model/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {

  @Input() userGender;

  constructor() {
  }

  ngOnInit() {

  }

  isMaleUser() {
    return this.userGender == UserGender.MALE;
  }

  isFemaleUser() {
    return this.userGender == UserGender.FEMALE;
  }
}
