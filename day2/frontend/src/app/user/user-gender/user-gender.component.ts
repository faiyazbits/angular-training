import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
  @Input() gender;
  constructor() {}

  ngOnInit() {}
}
