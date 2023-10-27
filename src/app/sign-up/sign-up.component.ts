import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { DocumentDTO } from '../DocumentDTO';
import { DataService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less', '../login/login.component.less']
})
export class SignUpComponent implements AfterViewInit{

  dataService  : DataService

  constructor(public router : Router, private elementref : ElementRef, dataService : DataService, private toast : ToastrService){
    this.dataService = dataService
  }

  ngAfterViewInit(): void {
    this.elementref.nativeElement.ownerDocument.body.classList.add("page-container")
    console.log(this.elementref.nativeElement.ownerDocument.body)
  }

  email : string = ""
  password : string = ""
  name: string = ""
  phone: string = ""
  document : DocumentDTO = {documentType: "CPF", content: "", documentEntityType: "INDIVIDUAL"}

  signup(){
    this.dataService.createUser({
      name: this.name,
      email: this.email,
      phone: this.phone,
      password: this.password,
      documentDTO: this.document,
      role: "USER"
    }). subscribe(
      (response : any) => {
          this.toast.success("Conta criada")
      },
      (error) =>{
          console.log(error)
          this.toast.error(error.error.errors[0])
      }
    )
  }

}
