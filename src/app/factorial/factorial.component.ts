import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  result:number=0
  num:number=0
  fact:number=1
  factnumber(){
    this.fact=1
   for(let i=1;i<=this.num;i++){
    this.fact=this.fact*i
   }
   this.result=this.fact
  }

}
