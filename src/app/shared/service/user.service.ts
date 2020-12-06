import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { User } from '../model/user';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient, private errorService: ErrorService) { }

  getUsers(): Observable<User[]> {
    return this.htpp.get<User[]>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/users/login')
    .pipe(
      tap( data => data),
      catchError(this.errorService.handleError('getUsers', []))
    )
  }
}
