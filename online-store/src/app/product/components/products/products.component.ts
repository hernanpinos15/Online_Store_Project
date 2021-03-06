import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  /*
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
  */

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  clickProduct(id: number) {
    console.log('product: ' + id);
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

}
