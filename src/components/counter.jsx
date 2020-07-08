import React, { Component } from "react";

class Counter extends Component {
  // Renders to the UI
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <h3>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </h3>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Add
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            Remove
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }

  // Changes color of number of items if 0 or >0
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "light";
    return classes;
  }

  // Checks the value of count in the State
  formatCount() {
    // Nitpicking count out of this.state; destructuring
    const { value: count } = this.props.counter;

    return count === 0 ? "0" : count;
  }
}

export default Counter;
