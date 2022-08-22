import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movies-catalog-item',
  templateUrl: './movies-catalog-item.component.html',
  styleUrls: ['./movies-catalog-item.component.css']
})
export class MoviesCatalogItemComponent implements OnInit {
  @Input() movie!: Movie;
  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
  }
  setBackground() {
    if (this.movie !== undefined) {
      return {
        "background-image": "linear-gradient(to right, #0d0d0c 50%, transparent 100%),url('" + this.movie.poster_path + "')",
        "height": "100%",
        "cursor": "pointer",
        "background-size": "contain",
        "background-position": "right",
        "background-repeat": "no-repeat",
        "overflow-y":"scroll"
        
      }
    }
    return {};
  }
  

  onSelect() {
    this.movieService.movieSelected.emit(this.movie);
    this.movieService.getAndSetCredits(this.movie);
    console.log(this.movie)
    const navigationExtras: NavigationExtras = {
      state: {
        movie:this.movie
      }
    };
    this.router.navigate(['/', 'movie'], navigationExtras);
  }
}
