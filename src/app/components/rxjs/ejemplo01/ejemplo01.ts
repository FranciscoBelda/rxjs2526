import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ejemplo01',
  imports: [],
  templateUrl: './ejemplo01.html',
  styleUrl: './ejemplo01.css',
})
export class Ejemplo01 {
  private readonly httpClient: HttpClient = inject(HttpClient);

    observable: Observable<number> = new Observable<number>((subscriber) => {
      setTimeout(() => {
        subscriber.next(1);
      },1000);
      setTimeout(() => {
        subscriber.next(2);
      },2000);
      setTimeout(() => {
        subscriber.next(3);
      },3000);
      setTimeout(() => {
        subscriber.complete();
      },4000);
    });

    comenzarObservable(){
      this.observable.subscribe({
        next: value => {
          console.log(value);
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Completado');
        }
      })
    }
}
