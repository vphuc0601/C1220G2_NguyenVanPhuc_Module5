import { Component, OnInit } from '@angular/core';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  operator: string;
  result: any;
  constructor() { }

  ngOnInit(): void {
  }
  getResult(): void{
    switch (this.operator) {
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '/':
        if ( this.num2 === 0){
          // error('Number 2 must not be 0');
          this.result = 'Khong the chia cho 0';
        }else {
          this.result = this.num1 / this.num2;
        }
        break;
    }
  }


  setOperator($event: any) {
    this.operator = $event.target.value;
  }
}
