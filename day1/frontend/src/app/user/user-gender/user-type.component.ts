import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: [ './user-type.component.css' ]
})
export class UserTypeComponent implements OnInit {

  @Input() userType;

  constructor() {
  }

  ngOnInit() {

  }

}
