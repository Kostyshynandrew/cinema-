import React from "react";
import { connect } from "react-redux";

import { AddToWatchLater } from "../actions/watchLaterAction";

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
              <div className="Single_Movie_Edit">
                <div style={{ width: "300px" }}>
                  <div>
                    <div>
                      <img src={movie.image} alt="Smiley face" />
                    </div>
                    <div className="Single_Movie_Name">
                      <div>
                        <h5>{movie.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="Single_Movie_Bottom">
                    <button
                      onClick={() =>
                        this.props.dispatch(AddToWatchLater(movie))
                      }
                      type="button"
                      class="btn btn-dark"
                    >
                      Remove from list
                    </button>
                  </div>
                </div>
                <div className="Single_Movie_Description">
                  <h3>Description</h3>
                  <p>{movie.description}</p>
                </div>
              </div>
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
