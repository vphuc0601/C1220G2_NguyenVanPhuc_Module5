import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1 = 0;
  num2 = 0;
  operator: string;
  result: number;
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
        this.result = this.num1 / this.num2;
        break;
    }
  }


  setOperator($event: any) {
    this.operator = $event.target.value;
  }
}
