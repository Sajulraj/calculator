import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditioncomponentComponent } from './additioncomponent/additioncomponent.component';
import { DivisionComponent } from './division/division.component';
import { FactorialComponent } from './factorial/factorial.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubstractionComponent } from './substraction/substraction.component';

const routes: Routes = [
  {path:"add",component:AdditioncomponentComponent},
  {path:"sub",component:SubstractionComponent},
  {path:"multi",component:MultiplicationComponent},
  {path:"fact",component:FactorialComponent},
  {path:"div",component:DivisionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
