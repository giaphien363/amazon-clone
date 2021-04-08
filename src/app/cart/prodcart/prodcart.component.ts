import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/home/product.model';
import { BasketService } from './../Basket.service';

@Component({
  selector: 'app-prodcart',
  templateUrl: './prodcart.component.html',
  styleUrls: ['./prodcart.component.css']
})
export class ProdcartComponent implements OnInit {
  public array: Number[];
  @Input() product: Product;
  @Input() index: number;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.array = Array(this.product.rating).fill(0);
  }
  onDelete() {
    this.basketService.deleteBasket(this.index);
  }
}
