import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  user : User
  


  constructor(private http:HttpClient) { 
    this.user= new User("","","")
  }
  userRequest(input){
    var username = input
    interface ApiResponse{
    avatar_url : any;
    name :any;
    bio:any;
  }

  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiURL+ username).toPromise().then(response=>{
      this.user.avatar= response.avatar_url
      this.user.name=response.name
      this.user.bio=response.bio
      console.log(response.name)

      resolve()
    },
    error=>{
      this.user.name="Victor Mongare"
      this.user.bio="Software developer"

      reject(error)
    })
  })
  return promise
  }
}