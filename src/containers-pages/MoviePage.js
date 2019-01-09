import React from "react";
import { connect } from "react-redux";
import { fetchProduct, fetchEditProduct } from "../actions/movieActions";
import { AddToWatchLater } from "../actions/watchLaterAction";

export class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMovie: {
        name: "",
        price: "",
        image: "",
        description: ""
      },
      edit: "none"
    };
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  handleChange(e) {
    let editMovie = { ...this.state.editMovie };
    let name = e.target.name;
    let value = e.target.value;
    editMovie[name] = value;
    this.setState({ editMovie });
  }

  checkIt(movie) {
    if (this.state.edit === "none") {
      return this.setState({ editMovie: movie, edit: "block" });
    } else {
      return this.setState({ edit: "none" });
    }
  }

  render() {
    const { error, loading, movie, movies, AddToWatchLater } = this.props;
    function ButtonWatch(props) {
      console.log(props.movie);
      const isHere = props.movies.find(movie => movie.id === props.movie.id);
      if (!isHere) {
        return (
          <button
            type="button"
            className="btn btn-secondary btn-sm w-50"
            onClick={() => AddToWatchLater(props.movie)}
          >
            Watch later
          </button>
        );
      }
      if (isHere) {
        return (
          <button
            type="button"
            className="btn btn-secondary btn-sm w-50"
            onClick={() => AddToWatchLater(props.movie)}
          >
            Remove from list
          </button>
        );
      }
      return <div>dhasudyasdgu</div>;
    }

    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (movie) {
      return (
        <div style={{ flex: "1" }}>
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
                  onClick={() => this.checkIt(movie)}
                  type="button"
                  class="btn btn-info w-50"
                >
                  Edit
                </button>
                <ButtonWatch movies={movies} movie={movie} />
              </div>
            </div>
            <div className="Single_Movie_Description">
              <h3>Description</h3>
              <p>{movie.description}</p>
            </div>
          </div>
          <div className="Edit_Movie">
            <form style={{ display: this.state.edit }}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  ref={movie.name}
                  name="name"
                  value={this.state.editMovie.name}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label>Film length</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={this.state.editMovie.price}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  className="form-control"
                  value={this.state.editMovie.image}
                  onChange={this.handleChange.bind(this)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="9"
                  value={this.state.editMovie.description}
                  onChange={this.handleChange.bind(this)}
                />
              </div>

              <button
                onClick={e => {
                  e.preventDefault();

                  this.props.fetchEditProduct(
                    this.state.editMovie.id,
                    this.state.editMovie
                  );
                }}
                type="button"
                class="btn btn-success"
              >
                Send Changes
              </button>

              <button
                onClick={() => this.setState({ edit: "none" })}
                type="button"
                class="btn btn-dark"
              >
                Cancel Edit
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state, props) => ({
  movie: state.movies.items.find(movie => movie.id === props.match.params.id),
  loading: state.movies.loading,
  error: state.movies.error,
  movies: state.watchLater.items
});
const mapDispatchToProps = {
  AddToWatchLater,
  fetchProduct,
  fetchEditProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
