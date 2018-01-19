import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return <h3>Dashboard</h3>;
  }
}

export default connect(null)(Dashboard);
