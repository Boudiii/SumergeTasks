import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { async, waitForAsync } from '@angular/core/testing';
import { map, Subject } from 'rxjs';
import { Credits, Movie } from '../movies/movies.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  myMovies!:any
  total!:number
  testMovie!: Movie; 
  getTest = this.http.get("https://api.themoviedb.org/3/movie/550?api_key=3779690abab2e8218a718b8f40c78def&language=en-US").pipe(map((data:any) => {return new Movie(data.original_title,data.overview,data.genres,"https://image.tmdb.org/t/p/w780/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",new Date(data.release_date).getFullYear(),"",data.id)})
  
  )
  movieSelected = new EventEmitter<Movie>();
  movieList: Movie[] = [];
  baseUrl!: string;
  getBase = this.http
    .get(
      'https://api.themoviedb.org/3/configuration?api_key=3779690abab2e8218a718b8f40c78def'
    )
    .subscribe((data: any) => (this.baseUrl = data.images.base_url));

  constructor(private http: HttpClient) {}
  getMovies(id:number): Movie[] {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=3779690abab2e8218a718b8f40c78def&language=en-US&page=' + id
      )
      .subscribe((data: any) => {
        const results = data.results;
        console.log(data);
        results.forEach((movie: any) => {
          movie = new Movie(
            movie.original_title,
            movie.overview,
            movie.genres,
            'http://image.tmdb.org/t/p/original' + movie.backdrop_path,
            new Date(movie.release_date).getFullYear(),
            'http://image.tmdb.org/t/p/w92' + movie.poster_path,
            movie.id
          );
          movie.total = data.total_results;
          this.movieList.push(movie);
        });
      });
    console.log(this.movieList);
    return this.movieList;
    
  }
  getAndSetCredits(movie: Movie)
  {
    const id = movie.id;
    let credits: Credits[] = []; 
    //get movie credits by id
    this.http.
    get(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=3779690abab2e8218a718b8f40c78def&language=en-US"
      ).subscribe((data: any) => {
        const cast = data.cast;
        const crew = data.crew;
        cast.forEach((castItem: any) => {
        let credit: any = {};
        if (castItem.known_for_department === "Acting") {
          credit.name = castItem.name;
          credit.role = castItem.character;
          if(castItem.profile_path != null)
            credit.profile_img = 'http://image.tmdb.org/t/p/w154' + castItem.profile_path;
          else {
            credit.profile_img = "https://bulma.io/images/placeholders/128x128.png";

          }
        }
        if(Object.keys(credit).length !== 0)
        credits.push(credit);
      });
        crew.forEach((crewItem: any) => {
        let credit: any = {};
        if (crewItem.job === "Director" || crewItem.job === "Screenplay") {
          credit.name = crewItem.name;
          credit.role = crewItem.job;
          credit.profile_img = 'http://image.tmdb.org/t/p/w92' + crewItem.profile_path;
          if (crewItem.job === "Director") {
            movie.director = crewItem.name;
          }
        }
        if(Object.keys(credit).length !== 0)
        credits.push(credit);
      });
      movie.setCredits(credits);
    })

  }
}
