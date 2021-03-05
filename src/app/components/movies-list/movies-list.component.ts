import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { take } from "rxjs/operators"
import { group } from '@angular/animations';
import { Observable } from 'rxjs';

type RequestInfo = {
  page: number;
};

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movies[] = [];
  info: RequestInfo = {
    page: null,
};
    private pageNum = 1;
    private query: string;
    private hideScrollHeight = 200;
    private showScrollHeight = 500;

  constructor (private MoviesSvc: MoviedbService) {}

  ngOnInit(): void {this.getDataFromService();}

  private getDataFromService (): void{
    this.MoviesSvc.allMovies(this.pageNum).subscribe ((res) => {

      console.log('Response ->', res);
      //const {info, results} = res;
     // this.movies = [... this.movies, ...results]
      //this.info = [... this.info,info]
    });
  }

  goUp():void {
    console.log("salir")
  }
}
