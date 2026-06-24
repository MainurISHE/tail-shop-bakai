import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';
import { CartService } from '../../features/cart/cart.service';
import { Product } from '../../entities/product/product.types';

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

  product?: Product;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('ID:', id);

    this.productService.getProduct(id).subscribe({
      next: (product) => {
        console.log('PRODUCT:', product);
        this.product = product;
      },

      error: (err) => {
        console.error('ERROR:', err);
      },
    });
  }
}
