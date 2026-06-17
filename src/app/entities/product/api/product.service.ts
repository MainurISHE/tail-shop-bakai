import { Injectable, signal } from '@angular/core';
import { Product } from '../product.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  loading = signal(true);

  constructor() {
    setTimeout(() => {
      this.loading.set(false);
    }, 1000);
  }

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Свитшот Бананчик',
      price: 600,
      oldPrice: 1200,
      discount: 50,
      image: 'products/suits/banana-suit.svg',
      description:
        'Хлопковый костюмчик с веселой банановой расцветкой. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке: 26-29',
      category: 'new-clothes',
    },

    {
      id: 2,
      title: 'Худи Милитари',
      price: 1800.0,
      image: 'products/suits/millitary-suit.svg',
      description:
        'Новый взгляд на милитари расцветку! На капюшоне также имеется принт. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина',
      category: 'clothes',
    },

    {
      id: 3,
      title: 'Худи Champion',
      price: 6490.0,
      oldPrice: 9206.0,
      discount: 29,
      image: 'products/suits/champion.svg',
      description:
        'Яркое хлопкое худи с начесом. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке: 26-29см; обхват груди: 40-4',
      category: 'new-clothes',
    },
    {
      id: 4,
      title: 'Худи Колор-блок',
      price: 1200.0,
      image: 'products/suits/color-block.svg',
      description:
        'Контрастное худи из хлопка без начеса. Идеально для теплой весны. S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по',
      category: 'new-clothes',
    },
    {
      id: 5,
      title: 'Свитшот Картошка Фри',
      price: 700.0,
      oldPrice: 1400.0,
      discount: 50,
      image: 'products/suits/french-fries-suit.svg',
      description:
        'Хлопковый свитшот с модным принтом! S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке: 26-29см; обхват груди',
      category: 'clothes',
    },
    {
      id: 6,
      title: 'Костюм Барабашка',
      price: 4200.0,
      image: 'products/suits/sheep-suit.svg',
      description:
        'Забавный плюшевый костюм. Ваш питомец будет в центре внимания на любом празднике! One size Длина по спинке: 26-29см; обхват груди: 40-44см; обхват ше',
      category: 'clothes',
    },
    {
      id: 7,
      title: 'Худи Woof',
      price: 1000.0,
      oldPrice: 1500.0,
      discount: 33,
      image: 'products/suits/woof-suit.svg',
      description:
        'Хлопковое худи с модным принтом. Яркое решение для весны! S Длина по спинке: 22-25см; обхват груди: 36-40см; обхват шеи: 20-24см. M Длина по спинке:',
      category: 'clothes',
    },
    {
      id: 8,
      title: 'Ошейник Total Black',
      price: 1490.0,
      image: 'products/collars/collar-total-black.svg',
      description:
        'Классический ошейник из ленты с двусторонней печатью с анатомической застежкой. Размер регулируется от 22 см до 40 см. One size Ширина 20 мм',
      category: 'collar',
    },
    {
      id: 9,
      title: 'Ошейник Red',
      price: 1490.0,
      image: 'products/collars/collar-red.svg',
      description:
        'Классический ошейник из ленты с двусторонней печатью с анатомической застежкой. Размер регулируется от 22 см до 40 см. One size Ширина 20 мм',
      category: 'collar',
    },
    {
      id: 10,
      title: 'Ошейник Rainbow',
      price: 1490.0,
      image: 'products/collars/collar-rainbow.svg',
      description:
        'Классический ошейник из ленты с двусторонней печатью с анатомической застежкой. Размер регулируется от 22 см до 40 см. One size Ширина 20 мм',
      category: 'collar',
    },
    {
      id: 11,
      title: 'Поводок Black',
      price: 1300.0,
      image: 'products/leashes/leash-black.svg',
      description:
        'Короткий поводок 1.2 м из ленты с двусторонней печатью для городского выгула. One size Ширина 20 мм Длина 120 мм',
      category: 'leash',
    },
    {
      id: 12,
      title: 'Поводок Red',
      price: 1300.0,
      image: 'products/leashes/leash-red.svg',
      description:
        'Короткий поводок 1.2 м из ленты с двусторонней печатью для городского выгула. One size Ширина 20 мм Длина 120 мм',
      category: 'leash',
    },
    {
      id: 13,
      title: 'Поводок-перестежка Black',
      price: 2590.0,
      image: 'products/leashes/leash-black-two.svg',
      description:
        'Универсальный поводок-перестежка с двумя карабинами для трех способов использования: через плечо, на поясе, как стандартный поводок. One size Ширина',
      category: 'leash',
    },
    {
      id: 14,
      title: 'Поводок Rainbow',
      price: 1300.0,
      image: 'products/leashes/leash-rainbow.svg',
      description:
        'Короткий поводок 1.2 м из ленты с двусторонней печатью для городского выгула. One size Ширина 20 мм Длина 120 мм',
      category: 'leash',
    },
  ]);
}
