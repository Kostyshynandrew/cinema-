import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class FooterPage extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className=" text-center py-3">
          © 2018 Copyright:
          <a href="#"> Kombo</a>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.watchLater.items,
  search: state.movies.searchText
});

export default connect(
  mapStateToProps,
  null
)(FooterPage);
