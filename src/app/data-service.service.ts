import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators'
import { UserService } from './user-service.service';
import { Donation } from './donation';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateCampanhaDTO } from './CreateCampanhaDTO';
import { enviroment } from 'src/environment/enviroment.prod';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http : HttpClient, private userService : UserService) { }

  api_url : string = enviroment.API_URL;
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }

  clearAuthorizationHeader(){
    this.httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
  }


  setAuthorizationHeader(){
    this.httpOptions = {
     headers:  new HttpHeaders({'Authorization' : `${localStorage.getItem("token")}`})
    }
  }

  getCampanhaBydId(id: string | null){
    this.setAuthorizationHeader();
    return this.http.get(this.api_url+"/campaigns/"+id, this.httpOptions)
  }

  createCampanha(campanha : CreateCampanhaDTO){
    this.setAuthorizationHeader();
    return this.http.post(this.api_url+"/campaigns", campanha, this.httpOptions)
  }

  getCampanhas(){
    this.setAuthorizationHeader()
    return this.http.get(this.api_url+"/campaigns", this.httpOptions)
  }

  getUser(id: number){
    this.setAuthorizationHeader()
    return this.http.get(this.api_url+"/users/"+id, this.httpOptions)
  }

  postDonation(donation : Donation){
    this.setAuthorizationHeader()
    return  this.http.post(this.api_url+"/donations", donation, this.httpOptions)
  }

  login(email : string, password: string){
    this.clearAuthorizationHeader()
    return this.http.post(this.api_url+"/auth/login",  {"email" : email, "password" : password}, this.httpOptions)
  }

  getUsers(){
    this.setAuthorizationHeader()
    return this.http.get(this.api_url+"/users", this.httpOptions)
  }

  createUser(data : CreateUserDTO){
    return this.http.post(this.api_url+"/users", data ,this.httpOptions)
  }

}
