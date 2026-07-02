import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../entities/product/api/product.service';
import { Product } from '../../entities/product/product.types';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.scss',
})
export class EditProduct {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  productService = inject(ProductService);
  fb = inject(FormBuilder);

  productId = Number(this.route.snapshot.paramMap.get('id'));

  form = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    oldPrice: [0],
    discount: [0],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor() {
    this.productService.getProduct(this.productId).subscribe({
      next: (product) => {
        this.form.patchValue({
          title: product.title,
          price: product.price,
          oldPrice: product.oldPrice,
          discount: product.discount,
          category: product.category,
          description: product.description,
          image: product.image,
        });
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  saveProduct() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const product = this.form.getRawValue() as Omit<Product, 'id'>;

    this.productService.updateProduct(this.productId, product).subscribe({
      next: () => {
        this.productService.loadProducts();

        this.router.navigate(['/admin/products']);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
