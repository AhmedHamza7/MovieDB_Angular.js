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

  getTvDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c230d25531822549561f354d375fe98f&language=en-US`)
  }



  getAllMovies(pageNumber:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=c230d25531822549561f354d375fe98f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
  getAllTv(pageNumber:number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/tv?api_key=c230d25531822549561f354d375fe98f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`)
  }
}
