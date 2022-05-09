import { Injectable } from '@angular/core';
import { AuthService } from './home/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(public auth:AuthService) { }

  authenticated():boolean{
    if(this.auth.authenticated){
      return true;
    }else{ return false}
  }



}
