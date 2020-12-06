import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddMovieService } from '../shared/service/add-movie.service';
import { AuthenticationService } from '../shared/service/authentication.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  addMovieForm = this.fb.group({
    title: ['', Validators.required],
    year: ['', Validators.required],
    note: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    picture: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authentication: AuthenticationService, private addMovieService: AddMovieService) { }

  ngOnInit(): void {
  }

  send(){
    this.addMovieService.addMovie(this.addMovieForm.value);
    console.log(this.addMovieForm.value);

    }
  }
