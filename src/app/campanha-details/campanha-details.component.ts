import { Component, ChangeDetectorRef } from '@angular/core';
import { Campanha } from '../Campanha';
import { CampanhaService } from '../campanha.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';
import { UserService } from '../user-service.service';
import { User } from '../User';
import { Donation } from '../donation';

@Component({
  selector: 'app-campanha-details',
  templateUrl: './campanha-details.component.html',
  styleUrls: ['./campanha-details.component.less']
})
export class CampanhaDetailsComponent {


    campanhaService? : CampanhaService;
    campanha? : Campanha
    porcentagem : number = this.campanha? this.campanha?.raisedMoney/this.campanha?.goal : 0

    campanhaId? : string | null

    buttonPressed : boolean = false;

    valorParaDoar? : number

  constructor(campanhaService : CampanhaService, private route : ActivatedRoute, private dataService : DataService, private cdr : ChangeDetectorRef, private user: UserService){
    this.campanhaService = campanhaService;
    if(this.campanhaService.getCampanha() == undefined)this.loadByUrl()
    else{
      this.campanha = campanhaService.getCampanha()
      this.porcentagem = this.campanha? this.campanha?.raisedMoney/this.campanha?.goal : 0
    }
  }

  doar(){
    this.dataService.getUsers().subscribe(
      (response : any) =>{
        if(response.content){
          let users : User[] = response.content
          users.forEach(element => {
            if(element.email == localStorage.getItem("email") && this.campanha && this.valorParaDoar) {
              let doacao : Donation = {"userId" : element.id, "campaignId" : this.campanha.id, "value": this.valorParaDoar}
              this.dataService.postDonation(doacao)
            }
          });
        }
      }
    )
    this.dataService
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
