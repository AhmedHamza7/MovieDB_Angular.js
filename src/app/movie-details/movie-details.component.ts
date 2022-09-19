import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

let content = document.querySelector(".content")

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) { }

  content:any
  movieId:string = ''
  details:any
  detailsGenres:any
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this.movieId = this._ActivatedRoute.snapshot.params['id']

    this._MoviesService.getMovieDetails(this.movieId).subscribe({
      next:(res)=>
      this.details = res
    })


    this._MoviesService.getMovieDetails(this.movieId).subscribe({
      next:(res)=>
      console.log(res)
      
    })

    this._MoviesService.getTvDetails(this.movieId).subscribe({
      next:(res)=>
      this.details = res
    })
  }

  // content.style.cssText = `backgroungImage = url(${this.imgPrefix+this.details.poster_path})`

  // imgPrefix+details.poster_path

  
}

