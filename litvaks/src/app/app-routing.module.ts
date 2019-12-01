import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BriskersComponent } from './comps/briskers/briskers.component';
import { MechablimComponent } from './comps/mechablim/mechablim.component';
import { ChazoneshnikComponent } from './comps/chazoneshnik/chazoneshnik.component';
import { SoneamComponent } from './comps/soneam/soneam.component';


const routes: Routes = [

{path: "briskers", component:BriskersComponent,
children:[
  {path:'', redirectTo: 'briskers', pathMatch:'full'},
  {path: 'mechablim',component: MechablimComponent},
  {path: 'soneam',component: SoneamComponent},
  {path: 'chazoneshnik',component: ChazoneshnikComponent},
]
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
