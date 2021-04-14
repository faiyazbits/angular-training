import { Component, OnInit, Input } from '@angular/core';
import { Gender } from '../../model/user.gender'
@Component({
  selector: 'app-user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {


  @Input() gender;
  
  constructor() {}

  ngOnInit() {}

  isUserMale() {
    return this.gender == Gender.MALE;
  }

  isUserFemale() {
    return this.gender == Gender.FEMALE;
  }
}
