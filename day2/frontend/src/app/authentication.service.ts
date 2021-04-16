import { Injectable } from '@angular/core';
import {LoginUser} from "./model/login.user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  public login(userInfo: LoginUser) {
    localStorage.setItem('Access-Token', 'access-token');
  }
  public isLoggedIn () {
    return localStorage.getItem('Access-Token') !== null;
  }
  public logout() {
    localStorage.removeItem('Access-Token');
  }
}
