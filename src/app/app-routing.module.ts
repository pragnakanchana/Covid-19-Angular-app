import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatComponent } from './what/what.component';
import { StatesComponent } from './states/states.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TravelDataComponent } from './travel-data/travel-data.component';


const routes: Routes = [
  {path: '', component: HomeComponent} , 
  {path : 'what' , component: WhatComponent} ,
  {path : 'state' , component: StatesComponent},
  {path : 'prevention' , component : PreventionComponent},
  {path : 'travel' , component : TravelDataComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
