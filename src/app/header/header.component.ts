import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BasketService } from './../cart/Basket.service';
import { Product } from './../home/product.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

    userSub: Subscription;
    subscription: Subscription;
    products: Product[] = [];

    isLoginMode: boolean = false;

    constructor(
        private basketService: BasketService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.subscription = this.basketService.productAdd.subscribe(
            (product: Product[]) => {
                this.products = product;
            }
        );
        this.userSub = this.authService.user.subscribe(
            user => {
                this.isLoginMode = user ? true : false;
            }
        )
    }

    logOut(){
        this.authService.LogOut();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userSub.unsubscribe();
    }

}