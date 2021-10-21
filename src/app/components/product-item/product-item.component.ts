import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  toAdd: number = 1;
  test: string = '';

  @Input() product: Product;
  @Output() addToCartEvent = new EventEmitter<{
    product: Product;
    quantity: number;
  }>();

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {}

  addToCart() {
    this.addToCartEvent.emit({ product: this.product, quantity: this.toAdd });
  }

  goToDetails(): void {
    //alert(`Going to details for product with ID ${this.product.id}`);
  }
}
