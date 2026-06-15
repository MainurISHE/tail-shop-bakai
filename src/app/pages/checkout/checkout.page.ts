import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../features/cart/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.scss',
})
export class CheckoutPage {
  cartService = inject(CartService);

  name = '';
  phone = '';
  address = '';
  comment = '';

  submitOrder() {
    alert('Заказ успешно оформлен!');

    this.cartService.clearCart();
  }
}
