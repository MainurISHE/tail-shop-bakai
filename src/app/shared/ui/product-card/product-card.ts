import { Component, input } from '@angular/core';
import { Product } from '../../../entities/product/product.types';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input.required<Product>()
}
