import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/Operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _connected: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  login(data): Observable<any> {
    return this.http.post<any>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/users/login', data, {responseType: 'json'})
    .pipe(
      tap(result => {
        const user: any = result;
        if (user.token != null || user.token != undefined) {
        }
        this._connected.next(true);
      }),
      catchError(this.errorService.handleError('login', []))
    )
  }
}
