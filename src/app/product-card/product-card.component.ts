import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule] // Add RouterModule and CommonModule
})
export class ProductCardComponent {
  @Input() product!: Product;

  getStockStatus(): string {
    return this.product.stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  getStockClass(): string {
    return this.product.stock > 0 ? 'text-success' : 'text-danger';
  }
}
