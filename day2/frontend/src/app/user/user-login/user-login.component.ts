import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  navigateToUserPage() {
    this.userService.checkForValidCredentials(this.userEmail, this.userPassword);
    this.router.navigateByUrl('/users');
    this.invalidLogin = this.userService.invalidLogin;
  }
}