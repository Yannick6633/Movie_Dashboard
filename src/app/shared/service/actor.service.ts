import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { Actor } from '../model/actor';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/actors')
    .pipe(
      tap(data => data ),
    catchError(this.errorService.handleError('getActors', []))
    );
  }
}
