# Moviedb

This is a project built in a weekend. It is supposed to be a simple UI to fetch information from the TMDB website.

- [Demo](https://moviedb.francopan.com.br)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build aand run with Docker

~~~
docker build -t moviedb .
docker run -p 80:80 moviedb
~~~