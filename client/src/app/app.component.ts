import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movies.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MovieService]
})
export class AppComponent implements OnInit {
  title = 'Angular 4 using a REST Service Demo';

  public movieObj : any;
  public movieId : string ="";
  public moviesList : any;

  constructor(private movieService:MovieService)
  {

  }
  public getMovieInfo() {
    this.movieService.getMovieDetail(this.movieId).subscribe(res => this.movieObj = res.json());
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(res => this.moviesList = res.json());

  }
}
