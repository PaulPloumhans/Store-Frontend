import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // key = Product, value = quantity
  cartItems: Map<Product, number> = new Map<Product, number>();
  cartValue = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // recover all products in the cart
    this.cartItems = this.cartService.getCart();
    // compute cart value
    this.cartValue = 0;
    this.cartItems.forEach((quantity, product) => {
      this.cartValue += product.price * quantity;
    });
  }

  cartSize(): number {
    return this.cartItems.size;
  }

  removeItem() {
    // find product
    alert('Removing item');
    //this.cartService.setInCart();
  }
}
