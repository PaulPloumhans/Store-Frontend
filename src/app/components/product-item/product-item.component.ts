import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  toAdd: number = 1;
  test: string = '';
  @Input() product: Product;

  constructor(private cartService: CartService) {
    this.product = new Product();
  }

  ngOnInit(): void {}

  addToCart(): void {
    alert(`adding ${this.toAdd} items of product ${this.product.id}`);
    this.cartService.addToCart(this.product, this.toAdd);
  }

  goToDetails(): void {
    //alert(`Going to details for product with ID ${this.product.id}`);
  }
}
