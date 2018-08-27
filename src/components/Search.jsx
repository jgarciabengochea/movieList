class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      newMovie: ''
    }
  }

  handleQueryInput(e) {
    if (e){
      this.setState({
        value: e.target.value
      });
    }
  }

  handleNewMovieInput(e) {
    if (e){
      this.setState({
        newMovie: e.target.value
      });
    }
  }
  
  render() {
    return (
      <div className="search-bar">
        <div className="add-movie">
          <input onChange={(e) => this.handleNewMovieInput(e)} className="add-movie-input" type="text" placeholder="Add a movie!"></input>
          <button onClick={() => this.props.handleAddNewMovie(this.state.newMovie)} className="add-btn">Add</button>
        </div>
        <div className="search-movies">
          <input onChange={(e) => this.handleQueryInput(e)} className="form-control" type="text" placeholder="Search..."></input>
          <button onClick={() => this.props.handleMovieSearch(this.state.value)} className="search-btn">Go!</button>
        </div>
      </div>
    );
  }
}



window.Search = Search;