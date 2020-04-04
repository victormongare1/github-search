import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { UserComponent} from '../user/user.component';
import { RepositoryComponent} from '../repository/repository.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import {AboutComponent} from '../about/about.component'

const routes : Routes=[
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'repository',component:RepositoryComponent},
  {path:'',redirectTo:'/about',pathMatch:"full"},

  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
