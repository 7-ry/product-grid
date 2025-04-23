import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, products } from '../products';


@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  products = products
  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

}
