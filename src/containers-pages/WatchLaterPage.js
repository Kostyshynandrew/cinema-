import React from "react";
import { connect } from "react-redux";
import MovieWatchLater from "../components/MovieWatchLater";

export class WatchLaterPage extends React.Component {
  render() {
    return (
      <div style={{ flex: "1" }}>
        {this.props.movies
          .filter(product =>
            product.name.toLowerCase().includes(this.props.search.toLowerCase())
          )
          .filter(
            product =>
              product.price < this.props.maxLength &&
              product.price > this.props.minLength
          )
          .map(movie => (
            <div key={movie.id}>
              <MovieWatchLater movie={movie} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.watchLater.items,
  search: state.movies.searchText,
  maxLength: state.movies.movieLengthMax,
  minLength: state.movies.movieLengthMin
});

export default connect(
  mapStateToProps,
  null
)(WatchLaterPage);
