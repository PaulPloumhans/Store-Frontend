import { Injectable } from '@angular/core';
import { createPrinter } from 'typescript';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Map<number, { product: Product; quantity: number }>; // key = product id, value = { product, quantity }
  constructor() {
    this.cart = new Map<number, { product: Product; quantity: number }>();
  }
  // and "quantity" items with ID "id" to the cart
  addToCart(
    product: Product,
    quantity: number
  ): Map<number, { product: Product; quantity: number }> {
    // adding to an existing entry
    const id = product.id;
    if (this.cart.has(id)) {
      let entry = this.cart.get(id) as { product: Product; quantity: number };
      entry.quantity += 1;
      this.cart.set(id, entry);
    } else {
      // new entry
      this.cart.set(id, { product: product, quantity: quantity });
    }
    return this.cart;
  }
  // Set "quantity" Product in the cart
  setInCart(
    product: Product,
    quantity: number
  ): Map<number, { product: Product; quantity: number }> {
    const id = product.id;
    // if setting quantity to 0, delete the entry
    if (quantity === 0) {
      this.cart.delete(id);
    } else {
      // otherwise set entry to the desired quantity
      this.cart.set(id, { product: product, quantity: quantity });
    }
    return this.cart;
  }
  // Build and return the cart product list
  getCartItems(): { product: Product; quantity: number }[] {
    let cartItems: { product: Product; quantity: number }[] = [];
    for (const entry of this.cart.values()) {
      cartItems.push(entry);
    }
    return cartItems;
  }

  // Returns cart value
  getCartValue(): number {
    let cartValue = 0;
    for (const entry of this.cart.values()) {
      cartValue += entry.product.price * entry.quantity;
    }
    return cartValue;
  }
}
