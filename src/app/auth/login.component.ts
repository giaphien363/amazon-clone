import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService, AuthResponsedata } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  isAuthentication: boolean ;
  isLoginMode: boolean = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthentication = user ? true : false;
        if (this.isAuthentication) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  onswitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    let authObs: Observable<AuthResponsedata>;

    if (this.isLoginMode) {
      authObs = this.authService.Login(email, password);
    } else {
      authObs = this.authService.SignUp(email, password)
    }

    authObs.subscribe(
      resdata => {
        this.isLoading = false;
        console.log(resdata);
        this.router.navigate(['/']);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    form.reset();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
