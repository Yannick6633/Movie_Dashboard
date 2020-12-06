import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { TokenInterceptorService } from './shared/service/token-interceptor.service';
import { UsersComponent } from './users/users.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'actors', component: ActorsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'actorDetai/:id', component: ActorDetailComponent},
  {path: 'movieDetail/:id', component: MovieDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addMovie' , component: AddMovieComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TokenInterceptorService,
   {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
    multi: true
  }
  ]
})
export class AppRoutingModule { }
