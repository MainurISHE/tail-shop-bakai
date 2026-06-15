import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';
import { CartService } from '../../features/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
})
export class ProductPage {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);

  productId = Number(this.route.snapshot.paramMap.get('id'));

  product = computed(() =>
    this.productService.products().find((product) => product.id === this.productId),
  );
}
