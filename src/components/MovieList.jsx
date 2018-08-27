var MovieList = ({movies, handleWatchedMovies}) => (
  <div className="movie-list">
    {_.map(movies, (movie) => (
      <MovieListEntry key={movie.id} movie={movie} handleWatchedMovies={handleWatchedMovies}/>
    ))}
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.MovieList = MovieList;