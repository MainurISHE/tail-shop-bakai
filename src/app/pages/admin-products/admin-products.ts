import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.scss',
})
export class AdminProducts {
  productService = inject(ProductService);

  products = this.productService.products;

  deleteProduct(id: number) {
    if (!confirm('Удалить этот товар?')) {
      return;
    }
    
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.productService.loadProducts();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
