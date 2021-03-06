import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { FavoritePagesComponent } from './pages/favorite-pages/favorite-pages.component';
import { ReservePageComponent } from './pages/reserve-page/reserve-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { FooterComponent } from './components/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    LoginPageComponent,
    CarouselComponent,
    MoviesListComponent,
    MoviesDetailsComponent,
    FavoritePagesComponent,
    ReservePageComponent,
    MoviesPageComponent,
    DetailsPageComponent,
    SearchMovieComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
