class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    } 
  }

  handleWatchedFlagClick() {

    this.setState({
      watched: !this.state.watched
    }, () => {
      console.log('success');
      let watchedMovieInfo = {
        movie: this.props.movie,
        watched: this.state.watched
      }
      this.props.handleWatchedMovies(watchedMovieInfo);
    });
  }

  render() {

    return (
      <div className="movie-list-entry">
        <h1>{this.props.movie.title}</h1>
        <a 
        style={{color: this.state.watched ? 'green' : 'red'}} 
        className="watched-flag" 
        onClick={() => {this.handleWatchedFlagClick()}}
        >
          watched
        </a>
      </div> 
    );
  }
}
  


MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};