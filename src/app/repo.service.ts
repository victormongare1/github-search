import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Repo} from './repo';
import {environment} from '../environments/environment'
import {User} from './user'
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  apiURL="https://api.github.com/users/"
  repo : Repo
  user : User


  constructor(private http:HttpClient) { 
    this.repo= new Repo("","","","",new Date())
    this.user=new User("","","","","","","",new Date())
  }
  repoRequest(input1,input2){
    var username=input1
    var repository=input2
    interface ApiResponse{
      name : any;
      forks:any;
      html_url:any;
      description:any;
      update:any;
    }

  let promise = new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(this.apiURL+ username + '/'+ repository + '?access_token=' + environment.token).toPromise().then(response=>{
      this.repo.name=response.name;
      this.repo.forks=response.forks;
      this.repo.link=response.html_url;
      this.repo.description=response.description;
      this.repo.update=response.update;

      resolve()
    },
    error=>{
      this.repo.name="Hello world"
      this.repo.forks="0"
      this.repo.link=""
      this.repo.description="My first website"
      
      reject(error)
    })
  })
  return promise
  }
}
