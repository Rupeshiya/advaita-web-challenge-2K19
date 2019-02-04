import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  // function to protect routes
  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
