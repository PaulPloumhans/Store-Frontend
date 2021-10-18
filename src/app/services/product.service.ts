import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }
  // Made this async otherwise imposible to select just one aray entry - this would be different with an actual API call
  async getProduct(id: Number): Promise<Product> {
    return new Promise((resolve, reject) => {
      this.http.get<Product[]>('assets/data.json').subscribe((x) => {
        const product = x.find((h) => (h.id as number) === id) as Product;
        resolve(product);
      });
    });
  }
}
