import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { UserComponent} from '../user/user.component';
import { RepositoryComponent} from '../repository/repository.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import {AppComponent} from '../app.component';

const routes:Routes=[
  {path:"users",component:UserComponent},
  {path:"repo",component:RepositoryComponent},
  {path:"",component: AppComponent},
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
