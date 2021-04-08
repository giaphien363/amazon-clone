import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../home/product.model';
import { BasketService } from './Basket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  products: Product[] = [];
  price: number = 0;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.subscription = this.basketService.productAdd
      .subscribe(
        (product: Product[]) => {

          this.products = product;
          this.price = product.reduce((value, ele) =>
            value + ele.price
            , 0
          );
          this.price = parseFloat(this.price.toFixed(2));
        }
      );
    this.products = this.basketService.getProduct();
    this.price = this.basketService.getPrice();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
