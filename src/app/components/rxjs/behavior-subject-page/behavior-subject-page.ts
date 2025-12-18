import {Component, inject, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CarritoService} from '../../../service/carrito-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-behavior-subject-page',
  imports: [
    AsyncPipe
  ],
  templateUrl: './behavior-subject-page.html',
  styleUrl: './behavior-subject-page.css',
})
export class BehaviorSubjectPage implements OnInit {
    myBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Initial');
    private readonly carritoService: CarritoService = inject(CarritoService);

    valor = 1;
    numeros: number[] = [];
    dato: string = '';

    ngOnInit() {
      this.loadCarrito();
    }

  private loadCarrito() {
    this.carritoService.carritoOutput2$.subscribe({
      next: value => {
        this.numeros = value;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  subscribete(){
    this.myBehaviorSubject.subscribe({
      next: value => {
        this.dato = value;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  addToCarrito(): void {
      this.myBehaviorSubject.next('Hola caracolaaaa '+(Math.floor(Math.random()*100)));
      this.carritoService.addElement(this.valor);
  }
}
