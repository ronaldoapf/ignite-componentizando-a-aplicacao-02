

import { MovieCard } from './MovieCard';

type ContentTypeProps = {
  selectedGenre: {
    title: string
  }
  movies: Array<{
    imdbID: string;
    Title: string;
    Runtime: string;
    Poster: any;
    Ratings: Array<{
      Value: string;
    }>
  }>
}

export function Content({ selectedGenre, movies }: ContentTypeProps) {
  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}