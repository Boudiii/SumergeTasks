import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesCatalogItemComponent } from './movies/movies-catalog-item/movies-catalog-item.component';
import { MoviesCatalogComponent } from './movies/movies-catalog/movies-catalog.component';
import { MovieComponent } from './movies/movie/movie.component';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticateGuard } from './services/authenticate-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieService } from './services/movie.service';
import { AuthenticateService } from './services/authenticate.service';
const appRoutes: Routes = [
  { path: 'popular_movies', canActivate: [AuthenticateGuard], component: MoviesCatalogComponent },
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
    MovieComponent,
    NavbarComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'}),
    FormsModule
  ],
  providers: [AuthenticateGuard,HttpClientModule,MovieService,PaginationService,AuthenticateService,HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
