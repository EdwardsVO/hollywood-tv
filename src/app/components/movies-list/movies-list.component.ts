import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { take } from "rxjs/operators"

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movies[] = [];

  // private pageNum = 1;
  private query: string | undefined;
  // private hideScrollHeight = 200;
  // private showScrollHeight = 500;

  constructor (private MoviesSvc: MoviedbService) {}

  ngOnInit(): void {this.getDataFromService();}

  private getDataFromService (): void{
    this.MoviesSvc.getDetails(50).pipe(take(1)).subscribe ((res: any) => {
      console.log('Response -> '), res;
      this.movies = [... this.movies]
    })
  }
}
