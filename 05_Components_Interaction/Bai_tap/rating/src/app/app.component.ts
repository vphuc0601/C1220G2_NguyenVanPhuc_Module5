import { Component } from '@angular/core';
import {IRate} from './irate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating';
  onRateChange(value) {
    console.log(value)
  }
}
