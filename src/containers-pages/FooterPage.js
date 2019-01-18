import React from "react";

import { Link } from "react-router-dom";

export default class FooterPage extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className=" text-center py-3">
          <p>
            © 2018 Copyright: <Link to=""> Kombo </Link>
          </p>
        </div>
      </footer>
    );
  }
}
