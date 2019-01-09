import React from "react";
import { connect } from "react-redux";
import { fetchProducts, searchText } from "../actions/movieActions";

import Movie from "../components/Movie";

// https://blog.benestudio.co/5-ways-to-connect-redux-actions-3f56af4009c8

// https://stackoverflow.com/questions/11128464/git-upload-pack-command-not-found
export class MoviesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
    this.props.dispatch(searchText(""));
  }

  render() {
    const { error, loading, movies, search, maxLength, minLength } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="All_Movies ">
        {movies
          .filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter(
            product => product.price < maxLength && product.price > minLength
          )
          .map(product => (
            <Movie product={product} key={product.id} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
  error: state.movies.error,
  search: state.movies.searchText,
  maxLength: state.movies.movieLengthMax,
  minLength: state.movies.movieLengthMin
});

// const mapDispatchToProps = {
//   AddToWatchLater
// };

export default connect(
  mapStateToProps,
  null
)(MoviesPage);
