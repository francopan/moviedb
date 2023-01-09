import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreModule } from 'src/core/core.module';
import { AuthInterceptor } from 'src/core/interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { PersonPhotoComponent } from './components/person-photo/person-photo.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { MovieStatusComponent } from './components/movie-status/movie-status.component';
import { MovieCreditComponent } from './components/movie/movie-credit/movie-credit.component';
import { MovieHeaderComponent } from './components/movie/movie-header/movie-header.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesPopularComponent } from './components/movies-popular/movies-popular.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RatingComponent } from './components/rating/rating.component';
import { SearchComponent } from './components/search/search.component';
import { PersonComponent } from './components/person/person.component';

const primeng = [
  ButtonModule,
  TagModule,
  SplitButtonModule,
  MenubarModule,
  SkeletonModule,
  KnobModule,
  InputTextModule,
  PaginatorModule,
  ImageModule,
  ToolbarModule,
  CardModule,
  AutoCompleteModule,
  TableModule
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    MovieComponent,
    MovieStatusComponent,
    MoviePosterComponent,
    MoviesPopularComponent,
    RatingComponent,
    MovieHeaderComponent,
    MovieCreditComponent,
    PersonPhotoComponent,
    SearchComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ...primeng,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
