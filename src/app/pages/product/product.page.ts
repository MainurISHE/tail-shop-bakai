import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';
import { CartService } from '../../features/cart/cart.service';
import { Product } from '../../entities/product/product.types';
import { DecimalPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, DecimalPipe, UpperCasePipe],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
})
export class ProductPage {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  cdr = inject(ChangeDetectorRef);

  product?: Product;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.productService.getProduct(id).subscribe({
        next: (product) => {
          this.product = product;
          this.cdr.detectChanges();
        },

        error: (err) => {
          console.error(err);
        },
      });
    });
  }
}
