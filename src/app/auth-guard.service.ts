import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private oAuthService: AuthService, private oRouter: Router){}
  canActivate(){
    if(!!this.oAuthService.sLoginKey)
      return true;
    else{
      this.oRouter.navigate(['/']);
    }

  }


}
