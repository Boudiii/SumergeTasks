import { Component } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { async, Observable } from 'rxjs';
import { MovieService } from './services/movie.service';
import { Movie } from './movies/movies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track-project';
  movie!: Movie;
  constructor(private http: HttpClient,private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.movieSelected
      .subscribe(
        (movie: Movie) => {
          this.movie = movie;
      }
    )
    // this.movieService.getTest.subscribe((data: any) => {
    //   this.movie = data;
    //   console.log(this.movie);
    //   if (this.movie !== undefined) {
    //     this.movieService.getAndSetCredits(this.movie);
    //   }
    // });
    
  }
  
  
}
