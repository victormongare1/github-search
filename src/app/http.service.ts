import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL="https://api.github.com/users/"
  user : User
  


  constructor(private http:HttpClient) { 
    this.user= new User("","","","","","","",new Date())
  }
  userRequest(input){
    var username = input
    interface ApiResponse{
    avatar_url : any;
    name :any;
    bio:any;
    public_repos:any;
    followers:any;
    following : any;
    company : any;
    updated_at: any
  }

  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(this.apiURL+ username +'?access_token=' + environment.token).toPromise().then(response=>{
      this.user.avatar= response.avatar_url
      this.user.name=response.name
      this.user.bio=response.bio
      this.user.repositories=response.public_repos
      this.user.followers=response.followers
      this.user.following=response.following
      this.user.company=response.company
      this.user.update=response.updated_at
      console.log(response.name)

      resolve()
    },
    error=>{
      this.user.name="Victor Mongare"
      this.user.bio="Software developer"
      this.user.avatar="https://avatars3.githubusercontent.com/u/60592312?s=400&v=4"
      this.user.repositories="44"
      this.user.followers="0"
      this.user.following="0"
      this.user.company="Moringa School"
      this.user.update=new Date(2020,2,2)
      reject(error)
    })
  })
  return promise
  }
}