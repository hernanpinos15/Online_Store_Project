import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Moto 1',
      price: 1000,
      description: 'bla ble bli blo blu'
    },
    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Moto 2',
      price: 1000,
      description: 'bla ble bli blo blu'
    },
    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Moto 3',
      price: 1000,
      description: 'bla ble bli blo blu'
    },
    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Moto 4',
      price: 1000,
      description: 'bla ble bli blo blu'
    },
    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Moto 5',
      price: 1000,
      description: 'bla ble bli blo blu'
    },
    {
      id: '6',
      image: 'assets/images/6.jpg',
      title: 'Moto 6',
      price: 1000,
      description: 'bla ble bli blo blu'
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
