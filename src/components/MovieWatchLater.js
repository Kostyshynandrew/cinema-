import React from "react";
import { connect } from "react-redux";
import { AddToWatchLater } from "../actions/watchLaterAction";

export function MovieWatchLater({ movie }) {
  return (
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
            onClick={() => this.props.dispatch(AddToWatchLater(movie))}
            type="button"
            className="btn btn-dark"
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
  );
}

const mapDispatchToProps = {
  AddToWatchLater
};

export default connect(
  null,
  mapDispatchToProps
)(MovieWatchLater);
