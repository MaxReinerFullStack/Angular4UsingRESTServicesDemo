import { Component } from '@angular/core';
import { MovieService } from '../services/movies.http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector : 'get-component'
 template:
 `<h2>GET Request Component (works after Browser refresh)</h2>
 <h3>Name: {{ movieObj.title }} </h3>
 <h3>Url: {{ movieObj.url }} </h3>
 <input type="hidden" [(ngModel)]="movieId" >
 <br/>
 <h3>Select a movie from list</h3>
 <select [(ngModel)]="movieId" style="background:red;color=black;">
   <option *ngFor = "let movie of moviesList" value="{{movie._id}}">{{movie.title}}</option>
 </select>
 <button (click)="getMovieInfo()" style="background:blue;color=yellow">Get Movie Details</button>
  `,
  providers: [MovieService]
})

export class GetComponent implements OnInit {

  constructor(private movieService:MovieService)
  {

  }

  public movieObj : any;
  public movieId : string ="";
  public moviesList : any;


  public getMovieInfo() {
    this.movieService.getMovieDetail(this.movieId).subscribe(res => this.movieObj = res.json());
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(res => this.moviesList = res.json());

  }

}
