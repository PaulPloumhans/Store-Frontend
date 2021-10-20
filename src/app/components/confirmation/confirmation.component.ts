import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  customerName: string = '';
  customerAddress: string = '';
  orderValue: number = 0;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.customerName = this.orderService.customerName;
    this.customerAddress = this.orderService.customerAddress;
    this.orderValue = this.orderService.orderValue;
  }
}
