import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {
   constructor (private _http : Http)   {

   }

   public getMovieDetail(id :string) {
     let _url : string = 'http://localhost:3000/movie/'+ id;
     return this._http.get( _url );
   }

   public getMovies() {
     let _url : string = 'http://localhost:3000/movie/';
     return this._http.get( _url );
   }
}
