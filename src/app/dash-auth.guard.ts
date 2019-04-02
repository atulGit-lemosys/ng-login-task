import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';

@Injectable()
export class DashAuthGuard implements CanActivate {
    constructor(private routes : Router , private userService : UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.userService.islogedinuser()){
        return true;
      }
      else
      {
        alert('you are not signin in redirecting.... to sign in ')
        this.routes.navigate(['/user']);
        return false;
      }
  }


  

  
}
