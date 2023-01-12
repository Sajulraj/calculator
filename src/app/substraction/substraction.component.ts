import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  result=0
  num1:number=0
  num2:number=0
  substractnumber(){
    this.result=this.num1-this.num2
  }
}
