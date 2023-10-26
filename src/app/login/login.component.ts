import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
import { UserService as UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private router: Router, private dataService : DataService, private userService : UserService) { }

  email? : string;
  password? : string;
  token? : any

  async login() : Promise<void>{

    let token : string = "";


    if(this.email != null && this.password != null){
      (await this.dataService.postAuth(this.email, this.password)).subscribe(
        (response : any) =>{
          if(response.token){
            this.userService.setToken(response.token)
            localStorage.setItem("token", response.token)
            if(this.email != undefined)
            localStorage.setItem("email", this.email)
            this.router.navigate(["/home"])
          }
        }
      )
    }
    // console.log(this.userService.getToken())
    // if(this.userService.getToken()){
    //   this.router.navigate(["/home"])
    // }
  }
}
