import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../home/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  productAdd = new Subject<Product[]>();

  private baskets: Product[] = [];

  constructor() { }

  getProduct() {
    return this.baskets.slice();
  }

  getPrice() {
    var gia = this.baskets.reduce(
      (value, ele) => value + ele.price
      , 0
    );
    return parseFloat(gia.toFixed(2));
  }

  addToBasket(product: Product) {
    this.baskets.push(product);
    this.productAdd.next(this.baskets.slice());
  }
  deleteBasket(index: number) {
    this.baskets.splice(index, 1);
    this.productAdd.next(this.baskets.slice());
  }

}
