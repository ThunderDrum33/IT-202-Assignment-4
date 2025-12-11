import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiBase = 'http://localhost:3000/api';
  private selectedProductCache: Product | null = null;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBase}/products`);
  }

  selectProduct(productId: string): Observable<any> {
    return this.http.post(`${this.apiBase}/select-product`, { productId }).pipe(
      tap((res: any) => {
        this.selectedProductCache = res.product;
      })
    );
  }

  getSelectedProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.apiBase}/selected-product`);
  }

  getSelectedProductFromCache(): Product | null {
    return this.selectedProductCache;
  }

  submitOrder(payload: any): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiBase}/submit-order`, payload);
  }
}