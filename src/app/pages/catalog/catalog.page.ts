import { Component, inject } from '@angular/core';
import { ProductService } from '../../entities/product/api/product.service';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [ProductCardComponent, RouterLink, Container],
  templateUrl: './catalog.page.html',
  styleUrl: './catalog.page.scss',
})
export class CatalogPage {
  productService = inject(ProductService);

  products = this.productService.products;

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.loadProducts();
    });
  }
}
