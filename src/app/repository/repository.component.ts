import { Component, OnInit } from '@angular/core';
import {RepoService} from '../repo.service';
import {HttpService} from '../http.service'
import {Repo} from '../repo'
import {User}from '../user'

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  user : User;
  repo : Repo;
  username:""
  repository:""
  constructor(private reposervice : RepoService,private httpservice:HttpService) { }
  
  showRepo(){
    this.reposervice.repoRequest(this.username,this.repository)
    this.httpservice.userRequest(this.username)
  }

  ngOnInit() {
    this.reposervice.repoRequest("victor","hello");
    this.repo=this.reposervice.repo
    this.httpservice.userRequest("victormongare");
    this.user=this.httpservice.user
  }

}
