import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from './cart.types';
import { Product } from '../../entities/product/product.types';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);

  totalItems = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));

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

    alert('Товар успешно добавлен в корзину!');
  }

  removeFromCart(productId: number) {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));
  }

  increaseQuantity(productId: number) {
    this.items.update((items) =>
      items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  decreaseQuantity(productId: number) {
    this.items.update((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
}
