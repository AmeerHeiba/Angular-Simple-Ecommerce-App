import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { Product } from '../models/product.model';
import { StarRatingPipe } from '../star-rating.pipe';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, StarRatingPipe, DiscountPipe], 
})
export class ProductCardComponent {
  @Input() product!: Product;

  getStockStatus(): string {
    return this.product.availabilityStatus;
  }

  getStockClass(): string {
    return this.product.stock > 0 && this.product.stock <= 5 ? 'text-warning' : 'text-success';
  }
}
