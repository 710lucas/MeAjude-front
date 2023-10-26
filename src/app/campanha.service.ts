import { Injectable } from '@angular/core';
import { Campanha } from "./Campanha"

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {

  constructor() { }


  private campanha? : Campanha

  public getCampanha(){
    return this.campanha;
  }

  public setCampanha(campanha : Campanha){
    this.campanha = campanha;
  }

}
