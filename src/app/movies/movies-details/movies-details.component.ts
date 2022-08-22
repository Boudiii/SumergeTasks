import { Component, Input, OnInit } from '@angular/core';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { Credits, Movie } from '../movies.model';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  @Input() movie!: Movie | null;
  constructor() { }

  ngOnInit(): void {
   
  }

}
