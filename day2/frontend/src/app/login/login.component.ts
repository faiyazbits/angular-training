import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickLogin() {

    let loginData = {
      username: this.username,
      password: this.password
    }
    let token: string = this.getToken(loginData);
    localStorage.setItem('token', token);

    this.navigateToProjectList();

  }

  getToken(loginData): string {
    return "xxyyzz";
  }

  navigateToProjectList() {
    this.router.navigate(['/projects']);
  }

}


