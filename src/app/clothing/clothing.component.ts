import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrl: './clothing.component.css'
})
export class ClothingComponent {
  clothingProducts = [
    { id: 1, name: 'T-shirt', description: 'Comfortable cotton T-shirt', price: 19.99, image: 'assets/images/tshirt.jpg' },
    { id: 2, name: 'Jeans', description: 'Stylish denim jeans', price: 49.99, image: 'assets/images/jeans.jpg' },
    // Add more products as needed
  ];

  constructor(private cartService: CartService) { }

addToCart(product: any) {
  this.cartService.addToCart(product);
}
}
