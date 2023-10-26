import { Component } from '@angular/core';
import { Campanha } from '../Campanha';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(private dataService : DataService){

    dataService.getCampanhas().subscribe(
      (result : any) =>{
        if(result.content){
          this.campanhas = result.content
        }
      }
    )

  }

  campanhas? : Campanha[]


  

}
