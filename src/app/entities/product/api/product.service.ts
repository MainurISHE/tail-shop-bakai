import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  loading = signal(true);

  products = signal<Product[]>([]);

  constructor() {
    this.loadProducts();
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
  }

  createProduct(product: Omit<Product, 'id'>) {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  updateProduct(id: number, product: Omit<Product, 'id'>) {
    return this.http.put<Product>(`http://localhost:3000/products/${id}`, product);
  }

  loadProducts() {
    this.loading.set(true);

    this.http.get<Product[]>('http://localhost:3000/products').subscribe({
      next: (products) => {
        this.products.set(products);
        this.loading.set(false);
      },

      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }
}
