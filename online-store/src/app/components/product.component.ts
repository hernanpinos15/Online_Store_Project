import { Component } from '@angular/core';
import { Product } from '../product.model';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    product: Product = {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Moto 1',
        price: 1000,
        description: 'bla ble bli blo blu'
    };
}
