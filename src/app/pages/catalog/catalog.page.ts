import { Component, inject } from '@angular/core';
import { ProductService } from '../../entities/product/api/product.service';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.page.html',
  styleUrl: './catalog.page.scss',
})
export class CatalogPage {
  productService = inject(ProductService);

  products = this.productService.products;
}
