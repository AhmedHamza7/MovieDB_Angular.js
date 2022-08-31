import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthLogGuard } from './auth-log.guard';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard], component:AboutComponent},
  {path:"contact",canActivate:[AuthGuard], component:ContactComponent},
  {path:"network",canActivate:[AuthGuard], component:NetworkComponent},
  {path:"login",canActivate:[AuthLogGuard], component:LoginComponent},
  {path:"register",canActivate:[AuthLogGuard], component:RegisterComponent},
  {path:"home",canActivate:[AuthGuard], component:HomeComponent},
  {path:"movieDetails/:id",canActivate:[AuthGuard], component:MovieDetailsComponent},


  {path:"**", component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
