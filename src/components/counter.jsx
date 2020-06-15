import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: ["tag1", "tag2", "tag3"] };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* adding bootstrap class as an attribute to the span element (hard coded)
        <span className=badge m-2 badge-primary>{this.formatCount()}</span>
        */}
        <button className="btn btn-secondary btn-sm">Increment</button>

        <ul>
          {this.state.tags.map((tag) => (
            // to satisfy the browser warning , each element need to have a key attribute which is unique in that list
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
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
