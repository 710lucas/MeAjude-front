import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
import { UserServiceService as UserService } from '../user-service.service';

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

  login() : void{


    if(this.email != null && this.password != null)
      this.token = this.dataService.postAuth(this.email, this.password)
    this.router.navigate(["/home"])
  }
}
