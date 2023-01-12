import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  result=0
  constructor(private service:CalcService){}
  num1:number=0
  num2:number=0
  multiplynum(){
    let data={
      "num1":this.num1,
      "num2":this.num2
    }
    this.service.performDivision(data).then(res=>res.json()).then(data=>this.result=data.Result)
  }
}

