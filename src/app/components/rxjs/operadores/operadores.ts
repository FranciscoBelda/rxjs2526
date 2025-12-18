import {Component, OnInit} from '@angular/core';
import {concat, filter, map, merge, Observable, of, reduce} from 'rxjs';

@Component({
  selector: 'app-operadores',
  imports: [],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores implements OnInit {
  // map -> Transformar los datos
  // filter -> Filtrar los datos
  // reduce -> Sacar el resultado final de acumulación de valores
  // merge -> Juntamos 2 Observables EN EL ORDEN QUE LLEGAN
  // concat -> Juntamos 2 Observables CUANDO AMBOS ESTÁN COMPLETOS


  numbers$ = of(1,2,3);
  numbers2$ = of(4,5,6);

  observable$: Observable<number> = new Observable<number>((subscriber) => {
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

  // Operador de TRANSFORMACIÓN
  squaredNumbers$ = this.numbers$.pipe(map(num => num * num));
  // Operador de FILTRADO
  evenNumbers$ = this.numbers2$.pipe(filter(num => num % 2 === 0));
  // Operador de ACUMULACIÓN
  reduceNumbers$ =  this.numbers2$.pipe(reduce((num1, num2) => num1 * num2));
  // Operador de fusión
  mergedNumbers$ = merge(this.observable$, this.numbers2$);
  concatNumbers$ = concat(this.observable$, this.numbers2$);


  // Colecciones
  mapNumbers: number[] = [];
  filterNumbers: number[] = [];
  reduceNumbers: number[] = [];
  mergedNumbers: number[] = [];
  concatNumbers: number[] = [];


  ngOnInit(): void {
    this.operadorMap();
    this.operadorFilter();
    this.operadorReduce();
    this.operadorMerge();
    this.operadorConcat();
  }

  private operadorMap() {
    this.squaredNumbers$.subscribe(
      {
        next: value => {
          console.log('Map', value);
          this.mapNumbers.push(value);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Map complete');
        }
      }
    )
  }

  private operadorFilter() {
    this.evenNumbers$.subscribe(
      {
        next: value => {
          console.log('Filter', value);
          this.filterNumbers.push(value);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Filter complete');
        }
      }
    )
  }
  private operadorReduce() {
    this.reduceNumbers$.subscribe(
      {
        next: value => {
          console.log('Reduce', value);
          this.reduceNumbers.push(value);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Reduce complete');
        }
      }
    )
  }
  private operadorMerge() {
    this.mergedNumbers$.subscribe(
      {
        next: value => {
          console.log('Merge', value);
          this.mergedNumbers.push(value);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Merge complete');
        }
      }
    )
  }
  private operadorConcat() {
    this.concatNumbers$.subscribe(
      {
        next: value => {
          console.log('Concat', value);
          this.concatNumbers.push(value);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('Concat complete');
        }
      }
    )
  }
}
