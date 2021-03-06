import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { AuthGuard } from './guards/auth.guard';
import { FavoritePagesComponent } from './pages/favorite-pages/favorite-pages.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component';

const routes: Routes = [
  { path: 'home',component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  {path: 'details', component: MoviesDetailsComponent},
  { path: 'favorites', canActivate: [AuthGuard], component: FavoritePagesComponent },
  { path: 'reserves', canActivate: [AuthGuard]  , component: ReservePageComponent },
  { path:'**', redirectTo: 'home'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
