import { Component , Input , OnInit } from '@angular/core';


@Component({
  selector: 'user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class GenderListComponent implements OnInit {
  
    @Input() userGender;

  constructor() {}

  highlight() {
      alert('Event Binding')
  }

  ngOnInit() {

  }
}
