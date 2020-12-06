import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: Movie;
  constructor(private route: ActivatedRoute ,private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.getMovie(this.id);
    })
  }

  getMovie(id) {
    this.movieService.getMovie(id)
    .subscribe( data => {
      this.movie = data;
    })
  }

}
