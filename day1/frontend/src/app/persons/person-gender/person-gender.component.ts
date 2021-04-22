import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector: 'app-person-gender',
    templateUrl: './person-gender.component.html',
    styleUrls: ['./person-gender.component.css']
})
export class PersonGenderComponent implements OnInit {
    

    @Input() personGender;
  @Input() personId;
  @Output() personSelector = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }
     onPersonGenderClick(){
    this.personSelector.emit(this.personId);
}    

}