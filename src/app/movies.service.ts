import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getMovies(type:string):Observable<any>{
   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=c230d25531822549561f354d375fe98f`)
  }

  getMovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c230d25531822549561f354d375fe98f&language=en-US`)
  }
}
