import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  electronicsProducts = [
    { id: 1, name: 'Smartphone', description: 'Latest 5G smartphone', price: 499.99, image: 'assets/images/smartphone.jpg' },
    { id: 2, name: 'Laptop', description: 'Powerful gaming laptop', price: 1299.99, image: 'assets/images/laptop.jpg' },
    // Add more products as needed
  ];

  constructor(private cartService: CartService) { }

addToCart(product: any) {
  this.cartService.addToCart(product);
}

}
