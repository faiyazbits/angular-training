import { Component , Input , OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'user-gender',
  templateUrl: './user-gender.component.html',
  styleUrls: ['./user-gender.component.css']
})
export class GenderListComponent implements OnInit {
  
    @Input() userGender 
    @Input() userId;

    @Output() userSelected = new EventEmitter<any>();

  constructor() {}


  // CLICK EVENT 
  userGenderHighlight() {
      this.userSelected.emit(this.userId);  // whenever the userGenderHighlight is clicked Im emiting an event called userSelected
  }

  ngOnInit() {

  }
}
