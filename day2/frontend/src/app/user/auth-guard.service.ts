import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      return true;
    }
    this.router.navigateByUrl("/login");
    return false;
   }
}

