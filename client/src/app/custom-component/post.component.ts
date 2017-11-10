import { Component } from '@angular/core';
import { MoviePOSTService } from '../services/movie.POST.http.service';
import { Component } from '@angular/core';


@Component({
  selector : 'post-component'
 template:
 `<h2>POST Request Component</h2>
  <h3>Input</h3>
  <h3>Title: <span style="font-size:18px;color:green"><input type="text" [(ngModel)]="movieRequest.title" /></span></h3>
  <h3>Url: <span style="font-size:18px;color:green"><input type="text" [(ngModel)]="movieRequest.url" /></span></h3>
  <button (click)="saveUserMovie()">Save Movie</button>
  <br/>
  <h3>Response Output</h3>
  <h3>Title: <span style="font-size:18px;color:red">{{ movieResponse.title }}</span></h3>
  <h3>Url: <span style="font-size:18px;color:red">{{ movieResponse.url }}</span></h3>
  <h3>Id: <span style="font-size:18px;color:red">{{ movieResponse._id }}</span></h3>
  `,
  providers: [MoviePOSTService]
})

export class PostComponent {

  constructor(private moviePOSTService:MoviePOSTService)
  {

  }



  public movieRequest : any = {title : "", url : ""};
  public movieResponse : any = {title : "", url : "", id : "" };

  public saveUserMovie() : void {
    this.moviePOSTService.saveMovie(this.movieRequest).subscribe(res => this.movieResponse = res);
  }

}
