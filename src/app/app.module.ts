import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { AdditioncomponentComponent } from './additioncomponent/additioncomponent.component';
import { SubstractionComponent } from './substraction/substraction.component';
import { FormsModule} from '@angular/forms';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { PrimenumbersComponent } from './primenumbers/primenumbers.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent,
    AdditioncomponentComponent,
    SubstractionComponent,
    MultiplicationComponent,
    PrimenumbersComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
