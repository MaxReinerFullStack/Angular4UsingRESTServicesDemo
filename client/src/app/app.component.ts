import { Component } from '@angular/core';
import { MovieService } from './services/movies.http.service';
import { PostComponent } from './custom-component/post.component';
import { GetComponent } from './custom-component/get.component';
import { MoviePOSTService } from './services/movie.POST.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MovieService, MoviePOSTService]
})

export class AppComponent  {
  title = 'Angular 4 using a REST Service Demo';

  constructor()
  { }

}
