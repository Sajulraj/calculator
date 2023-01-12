import { Component } from '@angular/core';

@Component({
  selector: 'app-primenumbers',
  templateUrl: './primenumbers.component.html',
  styleUrls: ['./primenumbers.component.css']
})
export class PrimenumbersComponent {
  result:boolean=true
  num1:number=0
  
  primenum(){
    for(let i=2;i<this.num1;i++)
      if(this.num1%i==0){
      this.result=false
      break
    
      }
  }
}
