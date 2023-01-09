import { PersonCredit } from "./person.model";
import { Movie } from "./movie.model";


export interface SearchResult {
    value: Movie | PersonCredit;
    type: 'movie' | 'person';
}