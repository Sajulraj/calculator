import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditioncomponentComponent } from './additioncomponent/additioncomponent.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubstractionComponent } from './substraction/substraction.component';

const routes: Routes = [
  {path:"add",component:AdditioncomponentComponent},
  {path:"sub",component:SubstractionComponent},
  {path:"multi",component:MultiplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
