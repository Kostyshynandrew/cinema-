import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AddToWatchLater } from "../actions/watchLaterAction";

export function Product({ product, AddToWatchLater, movies }) {
  function ButtonWatch(props) {
    const isHere = props.movies.find(movie => movie.id === props.product.id);
    if (!isHere) {
      return (
        <button
          type="button"
          className="btn btn-secondary btn-sm w-50"
          onClick={() => AddToWatchLater(product)}
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
          onClick={() => AddToWatchLater(product)}
        >
          Remove
        </button>
      );
    }
  }

  return (
    <div className="Single_Movie">
      <Link to={`/products/${product.id}`}>
        <div style={styles.product_block}>
          <div style={styles.img_block}>
            <img style={styles.img} src={product.image} alt="Smiley face" />
          </div>
          <div className="Single_Movie_Name">
            <div style={{ margin: "auto", display: "flex" }}>
              <h5 className="text-dark">{product.name}</h5>
            </div>
          </div>
          <div>
            <h5 className="text-dark">Film length ({product.price} min)</h5>
          </div>
        </div>
      </Link>
      <div className="Single_Movie_Bottom">
        <Link className="w-50" to={`/products/${product.id}`}>
          <button type="button" class="btn btn-info w-100">
            Info
          </button>
        </Link>

        <ButtonWatch movies={movies} product={product} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  movies: state.watchLater.items
});

const mapDispatchToProps = {
  AddToWatchLater
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

const styles = {
  img_block: {
    height: "350px",
    ":hover": {
      border: "1px solid black"
    }
  },
  img: {
    height: "100%",
    maxWidth: "100%",
    minWidth: "70%"
  },
  single_product: {
    display: "flex",
    width: "auto",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  },
  product_block: {
    display: "flex",
    flexDirection: "column"
  },
  product_name: {
    height: "30px"
  }
};
