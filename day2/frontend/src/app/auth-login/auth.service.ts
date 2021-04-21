import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class authgaurd implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const userLoginToken = localStorage.getItem('userLoginToken');
        if (userLoginToken == null) {
            return false;
        }
        return true;
    }
}