import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  allMovies:any
  imgPrefix:string = `https://image.tmdb.org/t/p/w500`
  pages:number[] = []
  term:string = ''

  constructor(private _moviesService:MoviesService) { }

  ngOnInit(): void {

    this.pages = new Array(10).fill("").map((x, i)=> i+1)

    this._moviesService.getAllTv(1).subscribe({
      next:(res) => this.allMovies = res.results
    })

    this._moviesService.getAllTv(1).subscribe({
      next:(res) => console.log(res)
      
    })
  }

  getPages(pageNumber:number) {
    this._moviesService.getAllTv(pageNumber).subscribe({
      next:(res) => this.allMovies = res.results
    })
  }
  }


