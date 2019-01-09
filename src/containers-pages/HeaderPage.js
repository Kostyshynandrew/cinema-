import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchText,
  maxMovieLength,
  minMovieLength
} from "../actions/movieActions";

export class HeaderPage extends React.Component {
  render() {
    const { search, number } = this.props;
    return (
      <div className="Header_Page">
        <div className="Header_Page_Cover ">
          <Link to={`/`}>
            <h2 className="">Home</h2>
          </Link>

          <div className="input-group " style={{ width: "300px" }}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Search
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              arialabel="Default"
              placeholder="Movie name"
              ariadescribedby="inputGroup-sizing-default"
              value={search}
              onChange={e => this.props.dispatch(searchText(e.target.value))}
            />
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Movie length
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                className="dropdown-item"
                type="button"
                value="130"
                onClick={e => {
                  this.props.dispatch(maxMovieLength(e.target.value));
                  this.props.dispatch(minMovieLength(0));
                }}
              >
                less than 130min
              </button>
              <button
                className="dropdown-item"
                type="button"
                value="130"
                onClick={e => {
                  this.props.dispatch(minMovieLength(e.target.value));
                  this.props.dispatch(maxMovieLength(parseInt(160)));
                }}
              >
                from 130 to 160
              </button>
              <button
                className="dropdown-item"
                type="button"
                value="160"
                onClick={e => {
                  this.props.dispatch(minMovieLength(e.target.value));
                  this.props.dispatch(maxMovieLength(parseInt(300)));
                }}
              >
                more than 160
              </button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  this.props.dispatch(maxMovieLength(3000));
                  this.props.dispatch(minMovieLength(0));
                }}
              >
                All movies
              </button>
            </div>
          </div>
          <Link to={`/watchlater`}>
            <button type="button" className="btn btn-primary">
              Movies to watch{" "}
              <span className="badge badge-light">{number}</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.movies.searchText,
  number: state.watchLater.items.length
});

export default connect(
  mapStateToProps,
  null
)(HeaderPage);
