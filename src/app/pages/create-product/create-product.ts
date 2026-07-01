import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../entities/product/api/product.service';
import { Router } from '@angular/router';
import { Product } from '../../entities/product/product.types';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {
  productService = inject(ProductService);
  router = inject(Router);
  fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    oldPrice: [0],
    discount: [0],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  createProduct() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const product = this.form.getRawValue() as Omit<Product, 'id'>;

    this.productService.createProduct(product).subscribe({
      next: (res) => {
        console.log('Создано:', res);

        this.productService.loadProducts();

        this.router.navigate(['/admin/products']);
      },

      error: (err) => {
        console.error('Ошибка:', err);
      },
    });
  }
}
