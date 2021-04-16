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
        const authenticationUserInfo = {email: 'ithirisshabi@gmail.com', password: 'admin@123'};
        localStorage.setItem('authInfoToken', JSON.stringify(authenticationUserInfo));
        if ((userInfo.email === JSON.parse(localStorage.getItem('authInfoToken')).email)
            && (userInfo.password === JSON.parse(localStorage.getItem('authInfoToken')).password)) {
            this.isloggedIn = true;
    }
    return this.isloggedIn;
}

public logout() {
    localStorage.removeItem('authInfoToken');

}
}
