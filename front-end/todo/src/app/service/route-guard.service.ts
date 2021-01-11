import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      // route user to login page
      this.router.navigate(['login']);
      return false;
    }
  }
}
