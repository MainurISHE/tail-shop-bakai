import { Component, input, inject } from '@angular/core';
import { Product } from '../../../entities/product/product.types';
import { CartService } from '../../../features/cart/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);
}
