import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class MoviePOSTService {
    constructor( private _http: Http){

    }

    saveMovie(request) {
      let _url : string = 'http://localhost:3000/movie/';
      return this._http.post(_url, { title: request.title,
       url : request.url })
      .map((res:Response) => res.json())
      .catch(this._errorHandler);
    }

    private _errorHandler(error : Response){
        console.error(error);
        return Observable.throw( error || 'Some Error on Server Occured' );

    }
}
