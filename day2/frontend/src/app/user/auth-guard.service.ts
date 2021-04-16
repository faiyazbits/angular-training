import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const userToken = localStorage.getItem('userToken')
    if (userToken) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
