import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'
import { Movies } from 'src/app/models/movies';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { take } from 'rxjs/operators';

type RequestInfo = {
  page: number;
};

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  @Input() currentID: number;
  movies: Movies = null;
  moviesList: any = [];
  movies$: Observable<Movies>;

  constructor(private route: ActivatedRoute, private MoviesSvc: MoviedbService, private location: Location ) { }

  ngOnInit(): void{
    this.getDetails(this.currentID);
    }
  
  getDetails(id: number){
    this.MoviesSvc.getDetails(id)
  }

  onBack(): void {
    this.location.back();
  }

}

