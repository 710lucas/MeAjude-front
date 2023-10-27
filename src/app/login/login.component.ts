import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
import { ToastrService } from "ngx-toastr"
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements AfterViewInit{

  constructor(public router: Router, private elementref : ElementRef, private dataService : DataService, private userService : UserService, private toaster : ToastrService) { }

  email? : string;
  password? : string;
  token? : any


  ngAfterViewInit(): void {
    this.elementref.nativeElement.ownerDocument.body.classList.add("page-container")
    console.log(this.elementref.nativeElement.ownerDocument.body)
  }

  async login() : Promise<void>{

    let token : string = "";


    if(this.email != null && this.password != null){
      this.dataService.login(this.email, this.password).subscribe(
        (response : any) =>{
          if(response.token){
            this.userService.setToken(response.token)
            localStorage.setItem("token", response.token)
            if(this.email != undefined)
            localStorage.setItem("email", this.email)
            this.router.navigate(["/home"])
            this.toaster.success("Login feito com sucesso")
          }
        },
        (error : any) => {
            console.log(error)
            this.toaster.success(error.error.errors[0])
        }
      )
    }
    // console.log(this.userService.getToken())
    // if(this.userService.getToken()){
    //   this.router.navigate(["/home"])
    // }
  }
}
