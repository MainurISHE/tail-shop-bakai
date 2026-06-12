import { Injectable, signal } from '@angular/core';
import { CartItem } from './cart.types';
import { Product } from '../../entities/product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);

  addToCart(product: Product) {
    this.items.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...items,
        {
          product,
          quantity: 1,
        },
      ];
    });

    console.log(this.items());
  }
}
