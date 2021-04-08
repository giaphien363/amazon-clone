import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './home/product.service';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { LoginComponent } from './auth/login.component';
import { ProdcartComponent } from './cart/prodcart/prodcart.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ProdcartComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
