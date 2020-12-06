import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';
import { Movie } from '../model/movie';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/movies')
    .pipe(
      tap(data => data ),
    catchError(this.errorService.handleError('getMovies', []))
    );
  }

  getMovie(id): Observable<any> {
    return this.http.get<any>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/movies' + id)
    .pipe(
      tap(data => data ),
    catchError(this.errorService.handleError('getMovie', []))
    );
  }
}
