import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  username!: string
  password!: string
  constructor(private authService: AuthenticateService, private router: Router) { 

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.loggedIn;
  }

}
