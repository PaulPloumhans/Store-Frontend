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
  cartItems: { product: Product; quantity: number }[] = [];
  cartValue = 0;
  // items for checkout
  customerName: string = '';
  customerAddress: string = '';
  customerCreditCard: string = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // recover all products in the cart
    this.cartItems = this.cartService.getCartItems();
    // compute cart value
    this.cartValue = this.cartService.getCartValue();
  }

  cartSize(): number {
    return this.cartItems.length;
  }

  removeItem(product: Product): void {
    alert('Removing item');
    this.cartService.setInCart(product, 0);
    // rebuild product list
    this.cartItems = this.cartService.getCartItems();
    // compute cart value - make sure there are only 2 digits after the decimal point
    this.cartValue = Math.round(this.cartService.getCartValue() * 100) / 100;
  }

  confirmOrder(): void {
    alert('Order confirmed');
  }
}
