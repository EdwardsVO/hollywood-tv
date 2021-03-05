import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private http: HttpClient) {}

  searchMovies(query = '') {
    return this.http.get<Movies[]>(`${environment.movieDBAPI}/movie/${query}${environment.secretKey}`)
  };

  getDetails(id: number) {
    return this.http.get<Movies> (`${environment.movieDBAPI}/movie/${id}${environment.secretKey}`)} 
  
  allMovies() {
    return this.http.get<Movies>(`${environment.movieDBAPI}/configuration${environment.secretKey}`)}

}
