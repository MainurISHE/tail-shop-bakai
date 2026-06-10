import { Injectable, signal } from '@angular/core';
import { Product } from '../product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Ошейник',
      price: 29,
      image: 'https://placehold.co/400',
    },

    {
      id: 2,
      title: 'Игрушка',
      price: 15,
      image: 'https://placehold.co/400',
    },

    {
      id: 3,
      title: 'Кошка',
      price: 49,
      image: 'https://placehold.co/400',
    },
  ]);
}