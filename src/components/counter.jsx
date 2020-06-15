import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: ["tag1", "tag2", "tag3"] };

  renderTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "there are no tags"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
