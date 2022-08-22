import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movies-catalog',
  templateUrl: './movies-catalog.component.html',
  styleUrls: ['./movies-catalog.component.css']
})
export class MoviesCatalogComponent implements OnInit {
  total!: number;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  movies: Movie[] = [];
  constructor(private movieService: MovieService,private auth:AuthenticateService) { 
    
  }
  config = {
    id: 'custom',
    itemsPerPage: 20,
    currentPage: 1,
    totalItems: 10224
  };
  
  ngOnInit(): void  {
    this.movies =  this.movieService.getMovies(this.config.currentPage);
    
  }
  onPageChange(event:any){
    console.log(event);
    this.config.currentPage = event;
    this.movies.length = 0;
    this.movies = this.movieService.getMovies(event);
  }
}
