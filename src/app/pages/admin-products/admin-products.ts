import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../entities/product/api/product.service';
import { ConfirmModalComponent } from '../../shared/ui/confirm-modal/confirm-modal';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, ConfirmModalComponent],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.scss',
})
export class AdminProducts {
  productService = inject(ProductService);

  products = this.productService.products;

  selectedProductId?: number;
  showDeleteModal = false;

  openDeleteModal(id: number) {
    this.selectedProductId = id;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.selectedProductId = undefined;
  }

  deleteProduct() {
    if (this.selectedProductId === undefined) {
      return;
    }

    this.productService.deleteProduct(this.selectedProductId).subscribe({
      next: () => {
        this.productService.loadProducts();
        this.closeDeleteModal();
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}