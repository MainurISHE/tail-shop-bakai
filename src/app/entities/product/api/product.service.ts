import { Injectable, signal } from '@angular/core';
import { Product } from '../product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Свитшот Бананчик',
      price: 600,
      oldPrice: 1200,
      discount: 50,
      image: 'https://placehold.co/400',
      description:
        'Хлопковый костюмчик с веселой банановой расцветкой. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке: 26-29',
    },

    {
      id: 2,
      title: 'Худи Милитари',
      price: 1800.0,
      image: 'https://placehold.co/400',
      description:
        'Новый взгляд на милитари расцветку! На капюшоне также имеется принт. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина',
    },

    {
      id: 3,
      title: 'Худи Champion',
      price: 6490.0,
      oldPrice: 9206.0,
      discount: 29,
      image: 'https://placehold.co/400',
      description:
        'Яркое хлопкое худи с начесом. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке: 26-29см; обхват груди: 40-4',
    },
    {
      id: 4,
      title: 'Худи Колор-блок',
      price: 1200.0,
      image: 'https://placehold.co/400',
      description:
        'Контрастное худи из хлопка без начеса. Идеально для теплой весны. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по',
    },
    {
      id: 5,
      title: 'Маша',
      price: 89,
      image: 'https://placehold.co/400',
    },
    {
      id: 6,
      title: 'Маша',
      price: 89,
      image: 'https://placehold.co/400',
    },
  ]);
}
