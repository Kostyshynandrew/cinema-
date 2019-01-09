import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

import store from "./store";
import HeaderPage from "./containers-pages/HeaderPage";
import MoviesPage from "./containers-pages/MoviesPage";
import MoviePage from "./containers-pages/MoviePage";
import WatchLaterPage from "./containers-pages/WatchLaterPage";
import FooterPage from "./containers-pages/FooterPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="App_Cover">
              <HeaderPage />
              <Switch>
                <Route path="/watchlater" component={WatchLaterPage} />
                <Route exact path="/" component={MoviesPage} />
                <Route exact path="/products" component={MoviesPage} />
                <Route path="/products/:id" component={MoviePage} />
              </Switch>
              <FooterPage />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
