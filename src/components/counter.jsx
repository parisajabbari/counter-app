import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  handleIncrement() {
    console.log("incremented", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* adding bootstrap class as an attribute to the span element (hard coded)
        <span className=badge m-2 badge-primary>{this.formatCount()}</span>
        */}

        <button
          onClick={this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
