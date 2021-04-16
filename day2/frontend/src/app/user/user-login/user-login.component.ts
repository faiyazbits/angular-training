import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userEmail = "";
  userPassword = "";
  invalidLogin: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  navigateToUserPage() {
    this.userService.checkForValidCredentials(this.userEmail, this.userPassword);
    this.invalidLogin = this.userService.invalidLogin;
  }
}
