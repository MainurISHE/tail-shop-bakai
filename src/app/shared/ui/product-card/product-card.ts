import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { Product } from '../../../entities/product/product.types';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input.required<Product>()
}
