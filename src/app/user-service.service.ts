import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user? : User;

  constructor() { }

  getUser() : User | undefined{
    return this.user;
  }

  setUser(user : User) : void{
    this.user = user;
  }

  getToken() : string | undefined{
    return this.user?.token;
  }

  setToken(token : string){
    if(this.user)
      this.user.token = token
  }

}
