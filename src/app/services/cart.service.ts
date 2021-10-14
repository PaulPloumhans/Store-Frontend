import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<Product, number>;
  constructor() {
    this.cart = new Map<Product, number>();
  }
  // and "quantity" items with ID "id" to the cart
  addToCart(product: Product, quantity: number): Map<Product, number> {
    // adding to an existing entry
    if (this.cart.has(product)) {
      this.cart.set(product, (this.cart.get(product) as number) + quantity);
    } else {
      // new entry
      this.cart.set(product, quantity);
    }
    //alert(`Adding ${quantity} items with ID ${id} to the cart`);
    return this.cart;
  }
  // Set "quantity" Product in the cart
  setInCart(product: Product, quantity: number): Map<Product, number> {
    // if setting quantity to 0, delete the entry
    if (quantity === 0) {
      this.cart.delete(product);
    } else {
      // otherwise set entry to the desired quantity
      this.cart.set(product, quantity);
    }
    return this.cart;
  }
  // Returns the cart
  getCart(): Map<Product, number> {
    return this.cart;
  }
}
