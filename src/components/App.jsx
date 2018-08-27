class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: window.exampleMovies,
      visibleMovies: window.exampleMovies,
    };
    this.watchedMovies= {};
  }
  
  handleMovieSearch(q) {
    var visibleMovies = [];
    this.state.movieList.forEach((movie) => {
      if (movie.title.toLowerCase().includes(q.toLowerCase())) {
        visibleMovies.push(movie);
      }
    });
    if (visibleMovies.length === 0) {
      visibleMovies = [{title: "no movie by that name found", id: "n/a"}];
    }
    this.setState({
      visibleMovies
    });
  }

  handleAddNewMovie(newMovie) {
    var movieList = this.state.movieList;
    var newMovieObject = {
      title: newMovie,
      id: movieList.length + 1,
      watched: false
    };
    movieList.push(newMovieObject);
    this.setState({
      movieList,
      visibleMovies: movieList
    });
  }
  
  handleWatchedMovies({movie, watched}) {
    console.log('hello from watched movies', movie, watched);
    if (watched) {
      this.watchedMovies[movie.id] = movie;
    } else if (!watched && this.watchedMovies[movie.id]) {
      delete this.watchedMovies[movie.id];
    } 
    console.log(this.watchedMovies);
    // this.setState({
    //   watchedMovies: this.state.watchedMovies
    // });
  }

  render() {
    return (
      <div>
        <div>
          <Search handleAddNewMovie={this.handleAddNewMovie.bind(this)} handleMovieSearch={this.handleMovieSearch.bind(this)}/>
        </div>
        <div>
          <WatchedFilter />
        </div>
        <div>
          <MovieList movies={this.state.visibleMovies} handleWatchedMovies={this.handleWatchedMovies.bind(this)}/>
        </div>
      </div>
    );
  }
}