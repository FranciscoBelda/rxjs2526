import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CarritoService} from '../../../service/carrito-service';
import {CurrencyPipe} from '@angular/common';
import {CartService} from '../../../services/cart-service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    CurrencyPipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  carrito: number = 0;
  private readonly carritoService: CarritoService = inject(CarritoService);
  private readonly cartService: CartService = inject(CartService);
  cartTotalItems = this.cartService.totalItemsCount;
  cartTotalPrice = this.cartService.cartTotal;
  ngOnInit() {
    this.loadCarrito();
  }

  private loadCarrito() {
    this.carritoService.carritoOutput$.subscribe({
      next: value => {
        this.carrito = value;
      },
      error: err => {
        console.error(err);
      }
    })
  }


}
