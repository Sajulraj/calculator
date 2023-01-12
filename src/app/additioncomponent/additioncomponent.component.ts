import { Component } from '@angular/core';

@Component({
  selector: 'app-additioncomponent',
  templateUrl: './additioncomponent.component.html',
  styleUrls: ['./additioncomponent.component.css']
})
export class AdditioncomponentComponent {
  result:number=0
  addnumbers(elem1:any,elem2:any){
    let n1=+elem1.value
    let n2=+elem2.value
    this.result=n1+n2
    
  }
}
