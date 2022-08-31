import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) { }

  movieId:string = ''
  details:any
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  ngOnInit(): void {
    this.movieId = this._ActivatedRoute.snapshot.params['id']

    this._MoviesService.getMovieDetails(this.movieId).subscribe({
      next:(res)=>
      this.details = res
    })
  }

}
