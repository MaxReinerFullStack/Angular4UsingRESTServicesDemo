import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieService } from './services/movies.http.service';
import { MoviePOSTService } from './services/movie.POST.http.service';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { PostComponent } from './custom-component/post.component';
import { GetComponent } from './custom-component/get.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PostComponent, GetComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [MovieService, MoviePOSTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
