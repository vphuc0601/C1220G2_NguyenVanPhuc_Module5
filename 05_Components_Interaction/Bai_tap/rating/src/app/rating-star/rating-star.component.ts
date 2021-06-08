import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRate} from '../irate';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {
  @Input()
  number1 = 0;

  @Output()
  rateChange = new EventEmitter<number>();

  rate: IRate = [1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeRate(index) {
    this.number1= index + 1;
    this.rateChange.emit(this.number1);
  }
}
