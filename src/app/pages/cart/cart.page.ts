import { Component, inject, computed } from '@angular/core';
import { CartService } from '../../features/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.page.html',
  styleUrl: './cart.page.scss',
})
export class CartPage {
  cartService = inject(CartService);

  total = computed(() => {
    return this.cartService
      .items()
      .reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  });

}
