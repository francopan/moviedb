import { Page } from 'src/core/models/page.model';
import { MovieStatus } from '../enums/movie-status.enum';
import { Country } from './country.model';
import { Genre } from './genre.model';
import { ProductionCompany } from './production-company.model';
import { SpokenLanguage } from './spoken-language.model';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<Country>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<SpokenLanguage>;
  status: MovieStatus;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface MoviePage extends Page<Movie> {}