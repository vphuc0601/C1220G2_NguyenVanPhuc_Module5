import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  message = '';
  remainingTime: number;
  @Input()
  seconds = 40;
  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  // ngOnChanges(changes: SimpleChanges) {
  //   if ('seconds' in changes) {
  //     let v = changes.seconds.currentValue;
  //     v = typeof v === 'undefined' ? 11 : v;
  //     const vFixed = Number(v);
  //     this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
  //   }
  // }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
        this.finish.emit(true);
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 400);
  }
}
