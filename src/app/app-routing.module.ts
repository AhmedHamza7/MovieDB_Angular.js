import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthLogGuard } from './auth-log.guard';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"movies",canActivate:[AuthGuard], component:MoviesComponent},
  {path:"tv",canActivate:[AuthGuard], component:TvComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},

  {path:"login",canActivate:[AuthLogGuard], component:LoginComponent},
  {path:"register",canActivate:[AuthLogGuard], component:RegisterComponent},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:"movieDetails/:id",canActivate:[AuthGuard], component:MovieDetailsComponent}, //id here is a variable 


  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
