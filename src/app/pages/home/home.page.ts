import { Component, inject, computed } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ProductCardComponent } from '../../shared/ui/product-card/product-card';
import { ProductService } from '../../entities/product/api/product.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, ProductCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  productService = inject(ProductService);

  featuredProducts = computed(() => this.productService.products().slice(0, 4));

  clothes = computed(() =>
    this.productService
      .products()
      .filter((product) => product.category === 'clothes')
      .slice(0, 4),
  );

  collar = computed(() =>
    this.productService
      .products()
      .filter((product) => product.category === 'collar')
      .slice(0, 4),
  );

  leash = computed(() =>
    this.productService
      .products()
      .filter((product) => product.category === 'leash')
      .slice(0, 4),
  );
}
