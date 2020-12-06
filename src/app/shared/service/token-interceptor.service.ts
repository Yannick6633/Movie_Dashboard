import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }

  intercept(req, next) {
    console.log('je suis visible')

    if (this.getToken()) {
      const tokenizedReq = req.clone({
        setHeaders : {
          Authorization : 'Bearer ' + this.getToken()
        }
      });

      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }

  }

  private getToken() {
    if (!!localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }
}
