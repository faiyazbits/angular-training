import {Injectable} from '@angular/core';
import {LoginUser} from "../model/login.user";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    isloggedIn = false;

    constructor() {
    }

    public login(userInfo: LoginUser) {
        localStorage.setItem('email', JSON.stringify('ithirisshabi@gmail.com'));
        localStorage.setItem('password', JSON.stringify('admin@123'));
        if ((userInfo.email === JSON.parse(localStorage.getItem('email'))) && (userInfo.password === JSON.parse(localStorage.getItem('password')))) {
            this.isloggedIn = true;
        }
        return this.isloggedIn;
    }
    public logout() {
        localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
}
