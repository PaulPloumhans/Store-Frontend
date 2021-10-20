import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

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
  isValidCreditCardNumber: boolean = true;
  invalidCreditCardMessage: string = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // recover all products in the cart
    this.cartItems = this.cartService.getCartItems();
    // compute cart value
    this.cartValue = Math.round(this.cartService.getCartValue() * 100) / 100;
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

  emptyCart(): void {
    this.cartItems = [];
    this.cartValue = 0;
    this.customerName = '';
    this.customerAddress = '';
    this.customerCreditCard = '';
  }

  confirmOrder(): void {
    // communicate order content to orderService
    this.orderService.registerOrder(
      this.cartItems,
      this.cartValue,
      this.customerName,
      this.customerAddress
    );
    this.cartService.emptyCart();
    this.emptyCart();
    this.router.navigate(['/confirmation']);
  }

  checkCreditCardNumber(event: string): void {
    this.isValidCreditCardNumber = /^\d{16}$/.test(event);
    if (this.isValidCreditCardNumber) {
      this.invalidCreditCardMessage = '';
    } else {
      this.invalidCreditCardMessage =
        'Credit card number must be exactly 16 digits';
    }
  }
}
