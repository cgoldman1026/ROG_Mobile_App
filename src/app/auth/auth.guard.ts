import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authSerivce: AuthServiceService, private router: Router) {
    
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authSerivce.userIsAuthenticated) {
        return true;
      }
      else {
        this.router.navigateByUrl('/login')
      }
  }
}
