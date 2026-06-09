import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
    ],
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog.page').then((m) => m.CatalogPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.page').then((m) => m.CartPage)
  }
];
