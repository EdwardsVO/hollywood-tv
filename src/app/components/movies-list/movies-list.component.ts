import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() idMovie: EventEmitter<number> = new EventEmitter();
  @Output() getDetails: EventEmitter<boolean> = new EventEmitter();
  
  movies: Movies = null;
  moviesList: any = [];
  moviesLoad: boolean = false;
  info: RequestInfo = {
    page: null,
};
    pageNum: number = 1;
    pageOne: boolean = true;
    private query: string;
    private hideScrollHeight = 200;
    private showScrollHeight = 500;

  constructor (private MoviesSvc: MoviedbService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService (): void{
  this.MoviesSvc.allMovies(this.pageNum).subscribe((res) =>{
    this.movies = res;
    console.log(this.movies)
    this.moviesList = this.movies.results
    this.moviesLoad = true;
    this.getDetails.emit(false);
    if(this.pageNum > 1){
      this.pageOne = false;
    }
    if(this.pageNum === 1){
      this.pageOne = true;
    }
  });
  }
  
  movePage(res: string){
      if(res==="sig"){
        this.pageNum++;
        this.getDataFromService();
        console.log(this.pageNum)
      }
      if(res==="ant"){
        this.pageNum--;
        this.getDataFromService();
      }
  }


  onDetailsClick(id: number) {
    console.log(id)
    this.getDetails.emit(true);
    this.idMovie.emit(id)

  }

}

