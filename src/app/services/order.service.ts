import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: { product: Product; quantity: number }[] = [];
  orderValue: number = 0;
  customerName: string = '';
  customerAddress: string = '';

  constructor() {}

  registerOrder(
    myCart: { product: Product; quantity: number }[],
    myOrderValue: number,
    myCustomerName: string,
    myCustomerAddress: string
  ): void {
    this.cart = myCart;
    this.orderValue = myOrderValue;
    this.customerName = myCustomerName;
    this.customerAddress = myCustomerAddress;
  }
}
