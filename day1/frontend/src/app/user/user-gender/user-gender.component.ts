import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: [ './user-gender.component.css' ]
})
export class UserGenderComponent implements OnInit {

  @Input() userGender;
  @Input() userId;
  @Output() userSelected = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }

  onUserGenderClick(){
    this.userSelected.emit(this.userId);
}

}