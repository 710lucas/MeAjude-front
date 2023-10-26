import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  api_url : string = "http://127.0.0.1:8081";
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }

  postAuth(email : string, password: string){
    this.http.post(this.api_url+"/auth",  {"email" : email, "password" : password},this.httpOptions).subscribe(
      (response : any) =>{
        console.log(response)
        if(response.token)
          return response.token
      },
      (error) =>{
        console.error(error)
        return null
      }
    )
  }

}
