import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Campanha } from '../Campanha';
import { User } from '../User';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';
import { CampanhaService } from '../campanha.service';

@Component({
  selector: 'app-campanha-card',
  templateUrl: './campanha-card.component.html',
  styleUrls: ['./campanha-card.component.less']
})
export class CampanhaCardComponent implements OnChanges {
  
  private dataService? : DataService;
  private campanhaService? : CampanhaService;

  constructor(dataService : DataService, private router : Router, campanhaService : CampanhaService){

    this.dataService = dataService;
    this.campanhaService = campanhaService


  }

  @Input() campanha? : Campanha

  user? : User

  porcentagem : number = this.campanha ? this.campanha?.raisedMoney/this.campanha?.goal : 0

  setBarra(){
    this.porcentagem = this.campanha ? this.campanha?.raisedMoney/this.campanha?.goal : 0
    console.log(this.porcentagem*100)
  }


  ngOnChanges(changes : SimpleChanges){
    if(changes['campanha']){
      this.getUser()
      this.setBarra()
    }

  }

  public getUser(){
    if(this.campanha)
    this.dataService?.getUser(this.campanha.creatorId).subscribe(
      (result: any) =>{
          this.user = result
          console.log(this.user)
      }
    )
  }

  redirect(){
    if(this.campanha){
      this.campanhaService?.setCampanha(this.campanha)
      this.router.navigate(["/campanhas/"+this.campanha.id])
    }
  }


}
