import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  result=0
  num1:number=0
  num2:number=0
  constructor(private service:CalcService){}
  substractnumber(){
    let data={
      "num1":this.num1,
      "num2":this.num2
    }
    this.service.performSubtraction(data).then(res=>res.json()).then(data=>this.result=data.Result)
  }
  
}
