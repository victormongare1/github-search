import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User
  username=""
  constructor(private httpservice : HttpService) { }
  
  showUser(){
    this.httpservice.userRequest(this.username)
  }


  ngOnInit(){
    this.httpservice.userRequest("victormongare");
    this.user=this.httpservice.user
  }

}
