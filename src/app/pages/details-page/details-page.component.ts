import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  @Input() currentID: number;
  constructor() { }

  ngOnInit(): void {
  }

}
