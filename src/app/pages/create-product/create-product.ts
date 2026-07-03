import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../entities/product/api/product.service';
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
  toastVisible = false;
  toastMessage = '';
  imagePreview = '';

  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    oldPrice: [0],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  createProduct() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    const product: Omit<Product, 'id'> = {
      title: value.title,
      price: value.price,
      category: value.category,
      description: value.description,
      image: value.image,
    };

    if (value.oldPrice > 0) {
      product.oldPrice = value.oldPrice;

      product.discount = Math.round((1 - value.price / value.oldPrice) * 100);
    }

    this.productService.createProduct(product).subscribe({
      next: () => {
        this.productService.loadProducts();

        this.showToast('Товар успешно создан');

        setTimeout(() => {
          this.router.navigate(['/admin/products']);
        }, 2000);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.toastVisible = true;

    setTimeout(() => {
      this.toastVisible = false;
    }, 2000);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    this.imagePreview = URL.createObjectURL(file);

    this.form.patchValue({
      image: file.name,
    });
  }
}
