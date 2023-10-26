import { Component } from '@angular/core';
import { User } from '../User';
import { DocumentDTO } from '../DocumentDTO';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {

  dataService  : DataService

  constructor(dataService : DataService){
    this.dataService = dataService
  }


  email : string = ""
  password : string = ""
  name: string = ""
  phone: string = ""
  document : DocumentDTO = {documentType: "CPF", content: "", documentEntityType: "INDIVIDUAL"}

  signup(){

  }

}
