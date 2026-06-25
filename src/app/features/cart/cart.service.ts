import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem } from './cart.types';
import { Product } from '../../entities/product/product.types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<CartItem[]>([]);
  platformId = inject(PLATFORM_ID);

  constructor() {
    this.loadFromStorage();
  }

  totalItems = computed(() => this.items().reduce((sum, item) => sum + item.quantity, 0));

  totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );

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

    this.saveToStorage();
  }

  removeFromCart(productId: number) {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));

    this.saveToStorage();
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

    this.saveToStorage();
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

    this.saveToStorage();
  }

  clearCart() {
    this.items.set([]);
    this.saveToStorage();
  }

  isInCart(productId: number) {
    return this.items().some(item => item.product.id === productId);
  }

  private saveToStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.items()));
    }
  }

  private loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('cart');

      if (savedCart) {
        this.items.set(JSON.parse(savedCart));
      }
    }
  }
}
