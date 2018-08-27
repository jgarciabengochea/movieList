class WatchedFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedFilterOn: false,
      toWatchFilterOn: false
    }
  }
  
  render() {
    return (
      <div className="filter">
        <div>
          <span className="watched"><a href="#">Watched</a></span>
          <span className="to-watch"><a href="#">To Watch</a></span>
        </div>
      </div>
    );
  }
}