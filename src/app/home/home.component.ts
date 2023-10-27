import { Component } from '@angular/core';
import { Campanha } from '../Campanha';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(private dataService : DataService, private router : Router){

    dataService.getCampanhas().subscribe(
      (result : any) =>{
        if(result.content){
          this.campanhas = result.content
        }
      }
    )

  }

  redirect(){
    this.router.navigate(["add-campanha"])
  }

  campanhas? : Campanha[]


  

}
