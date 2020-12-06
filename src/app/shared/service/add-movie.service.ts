import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/Operators';
import { Movie } from '../model/movie';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  addMovie(movie): Observable<Movie> {
    return this.http.post<any>('http://ec2-15-188-239-61.eu-west-3.compute.amazonaws.com:3000/movies/add', movie)
    .pipe(
      tap( data =>  {
        console.log(data);
      }),
      catchError(this.errorService.handleError('addMovie', []))
    )
      }
}
