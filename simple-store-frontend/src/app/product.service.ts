import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api';
  private selectedProduct: any;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }
  setSelectedProduct(product: any) {
    this.selectedProduct = product;
    return this.http.post(`${this.apiUrl}/select-product`, product).subscribe();
  }
  getSelectedProductFromService() {
    return this.selectedProduct;
  }
  getSelectedProductFromBackend() {
    return this.http.get(`${this.apiUrl}/selected-product`);
  }
  submitOrder(orderData: any) {
    return this.http.post(`${this.apiUrl}/submit-order`, orderData);
  }
}