import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../features/cart/cart.service';
import { Container } from '../container/container';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Container],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  cartService = inject(CartService);
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(id: string) {
    this.menuOpen = false;

    console.log(document.getElementById(id));

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
