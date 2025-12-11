import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  product: any;
  message = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product = this.productService.getSelectedProductFromService();

    if (!this.product) {
      this.productService.getSelectedProductFromBackend().subscribe((p: any) => {
        this.product = p;
      });
    }
  }

  submitOrder() {
    this.productService.submitOrder(this.product).subscribe((res: any) => {
      this.message = res.message;
    });
  }
}