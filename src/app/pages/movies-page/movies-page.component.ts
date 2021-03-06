import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  idmo:number;
  setDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  showDetails(details: boolean){
    this.setDetails = details;
  }

  saveID(id: number){
    this.idmo = id;
  }
}
