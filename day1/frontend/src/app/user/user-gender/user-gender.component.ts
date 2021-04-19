import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
    selector: 'app-user-gender',
    templateUrl: './user-gender.component.html',
    styleUrls: ['./user-gender.component.css']
})
export class UserGenderComponent implements OnInit {
    

    @Input() userGender;
  @Input() userId;
  @Output() sendToParent = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }
     onUserGenderClick(){
    this.sendToParent.emit(this.userId);
}    

}