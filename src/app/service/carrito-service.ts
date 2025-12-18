import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito$: BehaviorSubject<number> = new BehaviorSubject(0);
  private carrito2$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  carritoOutput$: Observable<number> = this.carrito$;
  carritoOutput2$: Observable<number[]> = this.carrito2$;

  addElement(value: number) {
    this.carrito$.next(this.carrito$.value + value);
    const miCarrito = this.carrito2$.value;
    miCarrito.push(value);
    this.carrito2$.next(miCarrito);
  }

}
