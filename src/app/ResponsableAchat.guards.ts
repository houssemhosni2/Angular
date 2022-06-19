import { Injectable } from "@angular/core";
import {CanActivate,Router} from "@angular/router";

@Injectable({
  providedIn:'root'
})

export class ResponsableAchatGuard implements CanActivate{
  constructor(private router:Router){}
  user:any;
   canActivate():any{
    this.user =localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if(this.user.role_id === 2){
      return true;
    }else{
      this.router.navigate(['/']);
    }
  }
}
