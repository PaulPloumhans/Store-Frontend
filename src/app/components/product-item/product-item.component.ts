import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  ngOnInit(): void {}

  addToCart(quantity: number) {
    this.cartService.addToCart(this.product, quantity);
  }
}
