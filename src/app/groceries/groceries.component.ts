import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
  groceriesProducts = [
    { id: 1, name: 'Apple', description: 'Fresh and juicy apples', price: 3.99, image: 'assets/images/apple.jpg' },
    { id: 2, name: 'Milk', description: 'Organic milk', price: 1.99, image: 'assets/images/milk.jpg' },
    // Add more products as needed
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
