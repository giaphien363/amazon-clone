import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from './product.model';
import { ProductService } from './product.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLoginMode: boolean;

  userSub: Subscription;

  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.userSub = this.authService.user.subscribe(
      user => {
        this.isLoginMode = user ? true : false;
        if (this.isLoginMode) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
