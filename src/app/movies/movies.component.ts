import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {

  constructor(private _moviesService:MoviesService) { }
  term:string = ''

  allMovies:any
  imgPrefix:string = `https://image.tmdb.org/t/p/w500`
  pages:number[] = []

  ngOnInit(): void {

    this.pages = new Array(10).fill("").map((x, i)=> i+1)
    
    this._moviesService.getAllMovies(1).subscribe({
      next:(res) => this.allMovies = res.results
    })
  }
  getPages(pageNumber:number) {
    this._moviesService.getAllMovies(pageNumber).subscribe({
      next:(res) => this.allMovies = res.results
    })
  }

}
