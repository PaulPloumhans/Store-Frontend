import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from '../../models/CartItem';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // build array of cartItems for display based on cart content and product info
    // get cart as Map<id, quantity>
    const cartMap: Map<Product, number> = this.cartService.getCart();
    // build cart through cartItems
    cartMap.forEach((quantity, product) => {
      let newItem = new CartItem();
      newItem.id = product.id;
      newItem.name = product.name;
      newItem.price = product.price;
      newItem.url = product.url;
      newItem.quantity = quantity;
      this.cartItems.push(newItem);
    });
    //alert(`initialized cart, length is ${this.cartItems.length}`);
  }

  cartSize(): number {
    return this.cartItems.length;
  }
}
