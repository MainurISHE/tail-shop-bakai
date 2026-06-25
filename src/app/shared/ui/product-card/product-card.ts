import { Component, input, inject } from '@angular/core';
import { Product } from '../../../entities/product/product.types';
import { CartService } from '../../../features/cart/cart.service';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();

  cartService = inject(CartService);
  router = inject(Router);

  openProduct() {
    this.router.navigate(['/product', this.product().id]);
  }

  addToCart(event: Event) {
    event.stopPropagation();

    if (this.cartService.isInCart(this.product().id)) {
      return;
    }

    this.cartService.addToCart(this.product());
  }
}
