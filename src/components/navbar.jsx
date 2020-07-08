import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Simple Counters
          <h5 className="badge badge-pill badge-success m-4">
            {this.props.counters.length} Counters Available
          </h5>
        </a>
      </nav>
    );
  }
}

export default NavBar;
