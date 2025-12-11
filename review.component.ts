import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  product: Product | null = null;
  submitting = false;
  message = '';
  error = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getSelectedProduct().subscribe({
      next: (p: Product) => this.product = p,
      error: () => this.error = 'No selected product. Go back and choose one.'
    });
  }

  submitOrder(): void {
    if (!this.product) return;
    this.submitting = true;
    const orderPayload = {
      productId: this.product.id,
      quantity: 1,
      timestamp: new Date().toISOString()
    };

    this.productService.submitOrder(orderPayload).subscribe({
      next: (res: { message: string }) => {
        this.message = res.message;
        this.submitting = false;
      },
      error: () => {
        this.error = 'The order fell through, try again please. :(';
        this.submitting = false;
      }
    });
  }
}