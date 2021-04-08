import { Component, Input, OnInit } from '@angular/core';

// import { ProductService } from '../product.service';
import { Product } from './../product.model';
import { BasketService } from './../../cart/Basket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: Product;
  public array: Number[];
  public product: Product;

  constructor(
    // private productService: ProductService,
    private basketService: BasketService) { }

  ngOnInit() {
    this.array = Array(this.products.rating).fill(0);
    this.product = this.products;

  }

  addToBasket() {
    this.basketService.addToBasket(this.product);
    // this.productService.addProductToBasket(this.product);
  }


}
