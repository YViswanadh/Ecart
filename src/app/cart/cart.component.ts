import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
// Example cart items
cartItems = [
  { id: 1, name: 'Smartphone', description: 'Latest 5G smartphone', price: 499.99, quantity: 1, image: 'assets/images/smartphone.jpg' },
  { id: 2, name: 'Laptop', description: 'Powerful gaming laptop', price: 1299.99, quantity: 1, image: 'assets/images/laptop.jpg' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199.99, quantity: 1, image: 'assets/images/headphones.jpg' }
];

// Remove an item from the cart
removeItem(item: any) {
  this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
}

// Calculate the subtotal (sum of item prices)
getCartSubtotal() {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Calculate the tax (example 10%)
getCartTax() {
  const subtotal = this.getCartSubtotal();
  return subtotal * 0.10; // 10% tax
}
// Calculate the total (subtotal + tax)
getCartTotal() {
  return this.getCartSubtotal() + this.getCartTax();
}

// Placeholder for proceeding to checkout
proceedToCheckout() {
  alert('Proceeding to checkout!');
}
}
