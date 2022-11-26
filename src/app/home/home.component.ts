import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService) { }
  customOptions: OwlOptions = {
    animateIn:true,
    margin:15,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots:false,
    dotsEach: false,
    navSpeed: 1000,
    nav:true,
    navText: ['Prev','Next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
  }

  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPerson:any[] = [];

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this._MoviesService.getMovies('movie').subscribe({
      next:(res)=> this.trendingMovies = res.results.slice(0,10)
    })

    this._MoviesService.getMovies('tv').subscribe({
      next:(res)=> this.trendingTv = res.results.slice(0,10)
    })

    this._MoviesService.getMovies('person').subscribe({

      next:(res)=> {
        for (let i = 0; i < res.results.length; i++){
          if(res.results[i].profile_path == null) {
            res.results[i].profile_path = '../../assets/profile.jpg'
          } else {
            res.results[i].profile_path = `https://image.tmdb.org/t/p/w500${res.results[i].profile_path}`
          }
      }
      this.trendingPerson = res.results.slice(0,10)      
      }
    
  })

}}