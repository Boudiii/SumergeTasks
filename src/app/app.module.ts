import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesCatalogItemComponent } from './movies/movies-catalog-item/movies-catalog-item.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { MoviesCatalogComponent } from './movies/movies-catalog/movies-catalog.component';
import { MovieComponent } from './movies/movie/movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticateGuard } from './services/authenticate-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
const appRoutes: Routes = [
  { path: 'popular_movies', component: MoviesCatalogComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login' ,pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesCatalogComponent,
    MoviesCatalogItemComponent,
    MoviesDetailsComponent,
    MovieComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'}),
    FormsModule
  ],
  providers: [AuthenticateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
