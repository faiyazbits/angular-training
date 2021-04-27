import { LoginUser } from '../model/login.user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
    providedIn: 'root'
})
export class AuthguardService  {

isloggedIn=false;
    constructor(private _router: Router) { }

   

    login(userInfo: LoginUser) {
        const authUserInfo = {email: 'Vinoth', password: 'Vinoth123'};
        localStorage.setItem('authInfoToken', JSON.stringify(authUserInfo));
        if ((userInfo.email === JSON.parse(localStorage.getItem('authInfoToken')).email)
            && (userInfo.password === JSON.parse(localStorage.getItem('authInfoToken')).password)) {
            this.isloggedIn = true;
    }
    return this.isloggedIn;
}


     logout() {
        localStorage.removeItem('authInfoToken');
}
}