import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-calientes',
  imports: [],
  templateUrl: './calientes.html',
  styleUrl: './calientes.css',
})
export class Calientes implements OnInit, OnDestroy {
    counter = 0;
    intervalSubscription!: Subscription;
    observableInterval$!: Observable<number>;

    ngOnInit() {
      this.start();
    }
    ngOnDestroy() {
      this.intervalSubscription.unsubscribe();
    }

  private start() {
      this.observableInterval$ = interval(600);
    this.intervalSubscription = this.observableInterval$.subscribe({
      next: value => {
        console.log(value);
        this.counter = value;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Complete!');
      }
    })
  }

  stop(){
      this.intervalSubscription.unsubscribe();
  }
}
