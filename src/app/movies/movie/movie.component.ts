import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../movies.model';
import AOS from "aos";
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  faArrow = faArrowDown
  movie!:Movie 
  constructor(private movieService: MovieService, private router: Router) { 
    console.log(this.router.getCurrentNavigation()?.extras.state);
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      movie:Movie
    };
    this.movie = state.movie;
  }

  ngOnInit(): void {
    AOS.init();
    
  }

  setBackground= () => {
    return {
      "background-image": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + this.movie.poster_path + "')",
      "background-position": "center",
      "background-repeat": "no-repeat",
      "position": "relative",
      "background-size":"cover"
    }
  }
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  
}
