import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fectchProduct();
  }

  fectchProduct(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      if (rta){
        console.log('Se elimino');
        this.products = this.products.filter(product => product.id !== id);
      }else{
        console.log('No se elimino');
      }
    });
  }
}
