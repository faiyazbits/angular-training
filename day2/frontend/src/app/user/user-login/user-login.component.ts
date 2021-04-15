import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userEmail="";
  userPassword="";
  invalidLogin: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  navigateToUserPage() {
    const credentials = this.userService.credentials;
    if(credentials.username == this.userEmail && credentials.password == this.userPassword){
      localStorage.setItem('userToken', 'sheerin');
      this.router.navigateByUrl('/users');
    } else {
      this.invalidLogin = true;
    }
    
  }
}
