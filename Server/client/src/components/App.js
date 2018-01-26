import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import * as actions from "../actions";

import Dashboard from "./Dashboard";
import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
