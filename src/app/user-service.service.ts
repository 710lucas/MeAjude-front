import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private user? : User;

  constructor() { }

  getUser() : User | undefined{
    return this.user;
  }

  setUser(user : User) : void{
    this.user = user;
  }

}
