import { Component } from '@angular/core';
import { CreateCampanhaDTO } from '../CreateCampanhaDTO';
import jwt_decode from "jwt-decode"
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';
import { ToastrService } from "ngx-toastr"


export function setCreatorId() : number{

    let token = localStorage.getItem("token")
    console.log(token)
    let jwt : any
    let creatorId: number

    if(token == null){
      return -1
    } 
    else{
      jwt = jwt_decode(token)
      creatorId = jwt.userid
    }

    return creatorId
  }


@Component({
  selector: 'app-campanha-creator',
  templateUrl: './campanha-creator.component.html',
  styleUrls: ['./campanha-creator.component.css', '../login/login.component.less']
})


export class CampanhaCreatorComponent {
  setCreatorId(){

    let token = localStorage.getItem("token")
    console.log(token)

    if(token == null){
      this.router.navigate(["/login"])
    } 
    else{
      this.jwt = jwt_decode(token)
      this.creatorId = this.jwt.userid
    }
    console.log(this.jwt)


    if(this.creatorId == -1)
      this.router.navigate(["/login"])
  }


  campanha : CreateCampanhaDTO;
  creatorId : number = -1
  jwt : any

  constructor(private router : Router, private dataService : DataService, private toaster : ToastrService){
    this.setCreatorId()
    this.campanha = {title: "", description: "", goal: undefined, finalDate: "", creatorId: this.creatorId  }
  }

  submit(){
    this.setCreatorId()
    console.log(this.creatorId)
    this.campanha.creatorId = this.creatorId
    this.dataService.createCampanha(this.campanha).subscribe(
      (response) =>{
        this.toaster.success("Campanha criada com sucesso")
        this.router.navigate(["home"])
      },
      (error) =>{
        this.toaster.error("Erro ao criar campanha: "+error.error.errors[0])
      }
    )
  }

}
