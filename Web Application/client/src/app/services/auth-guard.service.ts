import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import {AuthenticationService} from "./authentication.service";
// Import our authentication service


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    // If user is not logged in we'll send them to the homepage
    if (!this.auth.loggedIn()) {
      this.router.navigateByUrl('/signup');
      return false;
    }
    return true;
  }

}
