// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  // Add item to cart
  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Cart items:', this.cartItems);
  }

  // Get all cart items
  getCartItems() {
    return this.cartItems;
  }
}
