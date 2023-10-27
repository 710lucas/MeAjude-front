import { Component, ChangeDetectorRef } from '@angular/core';
import { Campanha } from '../Campanha';
import { CampanhaService } from '../campanha.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';
import { UserService } from '../user-service.service';
import { User } from '../User';
import { Donation } from '../donation';
import { setCreatorId } from '../campanha-creator/campanha-creator.component';
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-campanha-details',
  templateUrl: './campanha-details.component.html',
  styleUrls: ['./campanha-details.component.less']
})
export class CampanhaDetailsComponent {


    campanhaService? : CampanhaService;
    campanha? : Campanha
    porcentagem : number = this.campanha? this.campanha?.raisedMoney/this.campanha?.goal : 0

    campanhaId : string | null = null

    buttonPressed : boolean = false;

    valorParaDoar? : number

  constructor(campanhaService : CampanhaService, private route : ActivatedRoute, private dataService : DataService, private cdr : ChangeDetectorRef, private user: UserService, private toaster : ToastrService){
    this.campanhaService = campanhaService;
    this.loadByUrl()
  }

  doar(){
    let userId = setCreatorId()
    this.dataService.postDonation({userId: userId, campaignId: this.campanhaId, value: this.valorParaDoar}).subscribe(
      (response) =>{
        this.toaster.success("Doação feita com sucesso")
        this.campanha = this.campanhaService?.getCampanha()
        this.loadPorcentagem()
        this.loadByUrl()
      },
      (error) =>{
        this.toaster.error("Houve um erro ao fazer a doação")
      }
      
    )
  }

  loadPorcentagem(){

      this.porcentagem = this.campanha? this.campanha?.raisedMoney/this.campanha?.goal : 0
  }

  loadByUrl(){
    this.route.paramMap.subscribe(params=>{this.campanhaId=params.get('id'); this.dataService.getCampanhaBydId(params.get("id")).subscribe(
      (response : any) =>{
        this.campanha = response;
        this.campanhaService?.setCampanha(response)
        this.loadPorcentagem()
        console.log(response)
        this.cdr.detectChanges()
      }
    )
  })
  }






}
