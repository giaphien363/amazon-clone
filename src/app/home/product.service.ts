import { Injectable } from '@angular/core';

import { Product } from './product.model';
// import { BasketService } from './../cart/Basket.service';

@Injectable()
export class ProductService {

    constructor(
        // private basketService: BasketService
    ) { }

    private products: Product[] = [
        new Product(1, 'Coffe machine', 15.99, 4, '../../assets/amazon.jpg'),
        new Product(2, 'MacBook pro', 29.99, 5, '../../assets/macbookpro.jpg'),
        new Product(3, 'MacBook', 29.99, 5, '../../assets/macbook.png'),
        new Product(4, 'Speaker', 10.99, 3, '../../assets/loa.jpg'),
        new Product(5, 'Remote', 5.99, 4, '../../assets/control.jpg'),
        // new Product(6, 'Iphone', 19.99, 5, '../../assets/iphone.jpg')
        new Product(6, 'Iphone', 19.99, 5, 'https://i.ytimg.com/vi/zezcPSByjRA/maxresdefault.jpg')
    ];

    getProducts() {
        return this.products.slice();
    }

    // addProductToBasket(product: Product){
    //     this.basketService.addToBasket(product);
    // }

}