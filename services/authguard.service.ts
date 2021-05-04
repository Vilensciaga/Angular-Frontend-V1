import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private userSvc: UserserviceService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let userInfo = this.userSvc.GetLoggedInUser();

    if(userInfo===null || new Date(userInfo.exp*1000)< new Date())
    {
      this.userSvc.SetUserAsLoggedOff();
      this.router.navigate(['/login',{msg:'You must be logged in to access this page!'}]);
      return false;
    }
    else
      return true;

  }
}
