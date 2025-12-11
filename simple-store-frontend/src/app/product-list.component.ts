import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
  buyProduct(product: any) {
    this.productService.setSelectedProduct(product);
    this.router.navigate(['/review']);
  }
}