import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {ActivatedRoute} from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {

  }

}
