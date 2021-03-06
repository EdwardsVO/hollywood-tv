import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private http: HttpClient) {}

  searchMovies(query = '') {
    // return this.http.get<Movies[]>(`${environment.movieDBAPI}/movie/${query}${environment.secretKey}`)
  };

  getDetails(id: number) {
    return this.http.get<Movies> (`${environment.movieDBAPI}/movie/${id}${environment.secretKey}`)
  } 
  
  allMovies(page: number): Observable<Movies> {
    return this.http.get<Movies>(`${environment.movieDBAPI}/discover/movie${environment.secretKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  }

}
