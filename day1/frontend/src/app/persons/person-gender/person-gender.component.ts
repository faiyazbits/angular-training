import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector: 'app-person-gender',
    templateUrl: './person-gender.component.html',
    styleUrls: ['./person-gender.component.css']
})
export class PersonGenderComponent implements OnInit {
    

    @Input() personGender;
  @Input() personId;
  @Output() sendToParent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }
     onPersonGenderClick(){
    this.sendToParent.emit(this.personId);
}    

}