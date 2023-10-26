import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators'
import { UserService } from './user-service.service';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient, private userService : UserService) { }

  api_url : string = "http://127.0.0.1:8081";
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
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
    return  this.http.post(this.api_url+"/donation", donation, this.httpOptions)
  }

  async postAuth(email : string, password: string){
    return this.http.post(this.api_url+"/auth",  {"email" : email, "password" : password},this.httpOptions)
  }

  getUsers(){
    this.setAuthorizationHeader()
    return this.http.get(this.api_url+"/users", this.httpOptions)
  }

  createUser(){
    this.setAuthorizationHeader()
    return this.http.post(this.api_url+"/users", this.httpOptions)
  }

}
