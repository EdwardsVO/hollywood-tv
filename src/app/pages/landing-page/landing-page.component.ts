import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Movies } from 'src/app/models/movies';
import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  movies: Movies = null;
  moviesList: any = [];
  UpComingMoviesList: any = [];
  moviesLoad: boolean = false;
  page: 1;

  @Output() sendFormEvent = new EventEmitter;
  authForm: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService,private MoviesSvc: MoviedbService) { }

  ngOnInit(): void {
    this.createAuthForm();
    this.getDataFromService();
    this.getDataFromService2();
  }

  createAuthForm(): void {
    this.authForm = this._fb.group({
      displayName: '',
      email: '',
      password: ''
    })
  }

  onSubmit(): void {
    const formData = {
      email: this.authForm.get('email').value,
      password: this.authForm.get('password').value,
      displayName: this.authForm.get('displayName').value
    }
    this.sendFormEvent.emit(formData);
  } 
  
  handleGoogleLogin():void {
    this.authService.loginWithGoogle();
  }

  
  private getDataFromService (): void{
    this.MoviesSvc.upComing().subscribe((res) =>{
      this.movies = res;
      this.UpComingMoviesList = this.movies.results
      this.moviesLoad = true;
    });
    }

  private getDataFromService2(): void {
    this.MoviesSvc.allMovies(this.page).subscribe((res) =>{
      this.movies = res;
      this.moviesList = this.movies.results
      this.moviesLoad = true;
    });
  }
}
