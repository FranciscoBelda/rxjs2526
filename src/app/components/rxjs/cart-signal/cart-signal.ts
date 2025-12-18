import {Component, inject} from '@angular/core';
import {CartService} from '../../../services/cart-service';
import {Product} from '../../../common/cart-interfaces';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-signal',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart-signal.html',
  styleUrl: './cart-signal.css',
})
export class CartSignal {
    private readonly cartService: CartService = inject(CartService);
    cartItems = this.cartService.cartItems;
    cartTotal = this.cartService.cartTotal;

    products: Product[] = [
      {
        id: 1,
        price: 10,
        name: 'Planta'
      },
      {
        id: 2,
        price: 13,
        name: 'Lámpara'
      }
    ];

    onAddToCart(product: Product) {
      this.cartService.addToCart(product);
    }

    removeItem(id: number) {
      this.cartService.removeFromCart(id);
    }

    updateItemQuantity(id: number, event: any) {
      const newQuantity = parseInt(event.target.value, 10);
      this.cartService.updateQuantity(id, newQuantity);
    }

    goToPay(){
      // Ir a la pasarela de pago
      this.cartService.clearCart();
    }
}
